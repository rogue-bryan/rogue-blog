import { reloadRoutes } from 'react-static/node'
import chokidar from 'chokidar'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import renderMarkdown from './src/render.markdown'
import path from 'path'

chokidar.watch('content').on('all', () => reloadRoutes())

export default {
  siteRoot: 'https://eugora.github.io/',
  basePath: 'rogue-blog',
  publicPath: '/',
  getSiteData: () => ({
    title: 'Bryan\'s Tech Blog',
  }),
  getRoutes: async () => {
      const content = await renderMarkdown(path.resolve(__dirname, './content'))
      return [
        {
          path: '/',
          component: 'src/containers/Home',
          getData: () => ({
            home: content.home,
          }),
        },
        {
          path: '/about',
          component: 'src/containers/About',
          getData: () => ({
            about: content.about,
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
  webpack: (config, { defaultLoaders, stage }) => {
    let loaders = []

    if (stage === 'dev') {
      loaders = [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
    } else {
      loaders = [
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            minimize: stage === 'prod',
            sourceMap: false,
          },
        },
        {
          loader: 'sass-loader',
          options: { includePaths: ['src/'] },
        },
      ]

      // Don't extract css to file during node build process
      if (stage !== 'node') {
        loaders = ExtractTextPlugin.extract({
          fallback: {
            loader: 'style-loader',
            options: {
              sourceMap: false,
              hmr: false,
            },
          },
          use: loaders,
        })
      }
    }

    config.module.rules = [
      {
        oneOf: [
          {
            test: /\.s(a|c)ss$/,
            use: loaders,
          },
          defaultLoaders.cssLoader,
          defaultLoaders.jsLoader,
          defaultLoaders.fileLoader,
        ],
      },
    ]
    return config
  },
}
