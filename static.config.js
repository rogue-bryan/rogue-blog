import { reloadRoutes } from 'react-static/node';
import chokidar from 'chokidar';
import {getPages, getPosts} from './src/content.renderer';
import webpackConfig from './webpack.config';
import path from 'path';

chokidar.watch('content').on('all', () => reloadRoutes());

export default {
  siteRoot: 'https://bryanrengo.com/',
  publicPath: '/',
  getSiteData: () => ({
    title: 'Bryan\'s Tech Blog',
  }),
  getRoutes: () => {
    const posts = getPosts(path.resolve(__dirname, './content/blog'));
    let pages = getPages(path.resolve(__dirname, './content/home'), posts.children);
    pages = pages.concat(posts.posts);
    return pages;
  },
  webpack: (config, { defaultLoaders, stage }) => webpackConfig(config, { defaultLoaders, stage }),
};