
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: false,
      title: 'zero-crud-admin',
      dll: false,

      routes: {
        exclude: [
          /components\//,
          /config\//,
        ],
      },
    }],
  ],
  copy: [
    {
      from: "./src/config.js",
      to: "./config.js"
    },
  ],
  ignoreMomentLocale: true, // 忽略 moment 的 locale 文件
}
