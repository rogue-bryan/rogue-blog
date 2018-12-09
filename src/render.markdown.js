import fs from 'fs';
import html from 'remark-html';
import matter from 'gray-matter';
import remark from 'remark';
import dirTree from 'directory-tree';

const remarkParser = remark().use(html);

const getMarkdown = (filePath) => {
  console.log(filePath);
  const { data, content } = matter(fs.readFileSync(filePath, 'utf8'));
  const { contents } = remarkParser.processSync(content);
  
  return {
    contents: contents.replace(/(\r\n\t|\n|\r\t)/gm,""),
    ...data,
  };
}

export default (rootPath, fileRegex = /\.md/) => {
  const rootNode = rootPath || __dirname;
  const filter = {extensions: fileRegex};

  const tree = dirTree(
    rootNode,
    filter, 
    (item, path) => {
      item = Object.assign(item, {}, {
        ...getMarkdown(item.path)
      });
    });

  return tree;
};
