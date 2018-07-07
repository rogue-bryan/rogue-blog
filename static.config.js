import { reloadRoutes } from 'react-static/node'
import chokidar from 'chokidar'
import path from 'path'
import renderMarkdown from './src/render.markdown'
import webpackConfig from './webpack.config'

chokidar.watch('content').on('all', () => reloadRoutes())

export default {
  siteRoot: 'https://bryanrengo.com/',
  publicPath: '/',
  getSiteData: () => ({
    title: 'Bryan\'s Tech Blog',
  }),
  getRoutes: async () => {
      const content = await renderMarkdown(path.resolve(__dirname, './content'))
      return [
        {
          path: '/',
          component: 'src/containers/Page',
          getData: () => ({
            data: content.home,
            posts: content.posts.children.slice(0, 3)
          }),
        },
        {
          path: '/about',
          component: 'src/containers/Page',
          getData: () => ({
            data: content.about,
          }),
        },
        {
          path: '/blog',
          component: 'src/containers/Blog',
          getData: () => ({
            posts: content.posts.children,
          }),
          children: content.posts.children.map(post => ({
            path: `/post/${post.slug}`,
            component: 'src/containers/Post',
            getData: () => ({
              post,
            }),
          })),
        },
        {
          is404: true,
          component: 'src/containers/404',
        },
      ]
  },
  webpack: (config, { defaultLoaders, stage }) => 
    webpackConfig(config, { defaultLoaders, stage })
}