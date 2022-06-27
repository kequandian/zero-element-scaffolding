
module.exports = {
  layout: 'Content',
  // title: '商城配置',
  items: [
    {
      layout: 'Empty',
      component: 'Setting',
      config: {
        API: {
          listAPI: '/api/crud/configmanagement/configs/group/',
          getAPI: '/api/crud/configmanagement/configs/group/<id>/<name>',
          updateAPI: '/api/crud/configmanagement/configs/group/<id>',
        },
      },
    },
  ],
};
