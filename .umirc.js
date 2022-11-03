
// ref: https://umijs.org/config/
export default {
  title: 'Web-Tool',
  hash: true,
  // history: {
  //   type: 'hash',
  // },
  // dynamicImport: {
  //   loading: '@/framework/Loading'
  // },
  locale: {
    default: 'zh-CN',
    antd: true,
    title: false,
    baseNavigator: true,
    baseSeparator: '-',
  },
  antd: {},
  dva: false,
  ignoreMomentLocale: true, // 忽略 moment 的 locale 文件

  history: {
    type: 'hash'
  },
  chainWebpack(memo, { env, webpack, createCSSRule }) {
     memo.output.set('path', require('path').resolve(__dirname, 'dist/swagger-manage'))
     memo.output.set('filename', 'bundle.js')
  },
   
  // outputPath: '/dist/swagger-manage',
  publicPath: process.env.NODE_ENV === 'production' ? './swagger-manage/' : '/',  //设置 dist/index.html 访问 js和css路径
}
