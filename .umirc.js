
// ref: https://umijs.org/config/
export default {
  title: 'Zero_V1.1',
  hash: true,
  // history: {
  //   type: 'hash',
  // },
  dynamicImport: {
    loading: '@/framework/Loading'
  },
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
}
