module.exports = [
  {
    name: '普通菜单',
    path: '/a',
  },
  {
    name: '分割线',
    key: 'divider',
  },
  {
    name: '一级菜单',
    path: '/b',
    items: [
      {
        path: '/b/c',
        name: '二级菜单',
      },
    ],
  },
]