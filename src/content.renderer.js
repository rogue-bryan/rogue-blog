import dirTree from 'directory-tree';
import fs from 'fs';
import html from 'remark-html';
import matter from 'gray-matter';
import remark from 'remark';
import {routeType, specialFolders} from './constants';

const remarkParser = remark().use(html);

// get markdown for file
const getMarkdown = (filePath) => {
  const { data, content } = matter(fs.readFileSync(filePath, 'utf8'));
  const { contents } = remarkParser.processSync(content);
  
  return {
    contents: contents,
    ...data,
  };
};

// get all the posts in the folder 
const getPosts = (postPath) => {
  const content = getFileTree(postPath);
  const posts = [];
  const children = content && content.children ? content.children : [];

  posts.push({
    path: '/blog',
    component: './src/containers/Blog',
    getData: () => ({
      posts: children,
    }),
    children: children.map(post => ({
      name: post.name,
      path: post.date ? `/post/${post.date}/${post.slug}` : `/post/${post.slug}`,
      component: './src/containers/Post',
      getData: () => ({
        post,
      }),
    })),
  });
  
  return { 
    posts: posts,
    children: children,
  };
};

// recurse through all the content in the home folder and create the route tree
const getPages = (pagePath, posts) => {
  const pages = getFileTree(pagePath);
  const routes = [];
  const recursePages = function(page, folder) {
    if (page.type === routeType.file) {
      routes.push({
        name: page.name,
        path: specialFolders.home === folder ? '/' : `/${folder}`,
        component: './src/containers/Page',
        getData: () => ({
          data: page,
          posts: specialFolders.home === folder && posts ? posts.slice(0, 3) : []
        }),
      });
    } else {
      for (var i = 0; i < page.children.length; i++) {
        const child = page.children[i];
        recursePages(child, page.name);
      }
    }
  }

  recursePages(pages);

  return routes;
};

// get fileTree with markdown
const getFileTree = (rootPath, fileRegex = /\.md/) => {
  const rootNode = rootPath || __dirname;
  const filter = {extensions: fileRegex};

  return dirTree(
    rootNode,
    filter, 
    (item, _) => {
      item = Object.assign(item, {}, {
        ...getMarkdown(item.path)
      });
    });
};

export {
  getFileTree,
  getPages,
  getPosts,
};
