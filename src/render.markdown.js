import matter from 'gray-matter'
import fs from 'fs-extra'
import pathResolve from 'path'
import remark from 'remark'
import html from 'remark-html'
import walk from 'walk'

const remarkParser = remark().use(html)

export default (rootPath) => {
  return new Promise((resolve, reject) => {

    const root = rootPath || __dirname; // if there's no rootPath use exec location
    const tree = {};
    const nodesMap = {};
    const walker = walk.walk(root, { followLinks: false }); // filter doesn't work well

    const addNode = (node, path) => {
      if (node.name.indexOf('.') === 0 || path.indexOf('/.') >= 0) { // ignore hidden files
        return;
      }

      var relativePath = path.replace(root, '');

      node.path = relativePath + '/' + node.name;
      nodesMap[node.path] = node;

      if (relativePath.length === 0) { //is root
        tree[getNodeName(node.name)] = node;
        return;
      }

      const parentPath = node.path.substring(0, node.path.lastIndexOf('/'));
      const parent = nodesMap[parentPath];
      
      parent.children.push(node);

    }

    const getMarkdown = async (path, fileName) => {
      const ext = pathResolve.extname(fileName)
      if (ext == '.md') {
        const { data, content } = matter(await fs.readFile(pathResolve.resolve(path, fileName), 'utf8'))
        const { contents } = await remarkParser.process(content)
        return {
          contents: contents,
          ...data,
        }
      } else {
        return {}
      }
    }

    const getNodeName = (name) => {
      return pathResolve.parse(name).name
    }

    walker.on('directory', (path, stats, next) => {
      addNode({ name: stats.name, children: [] }, path);
      next();
    });

    walker.on('file', async (path, stats, next) => {
      addNode({ 
        name: stats.name,
        ...await getMarkdown(path, stats.name)
       }, path);
      next();
    });

    walker.on('end', () => {  
      resolve(tree);
    });

    walker.on('errors', (root, nodeStatsArray, next) => {
      reject(nodeStatsArray);
      next();
    });
  });
}