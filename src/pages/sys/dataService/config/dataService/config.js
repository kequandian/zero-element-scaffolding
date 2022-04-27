const apiSettings = require('./.setting/dataService-api');

module.exports = {
  layout: 'Content',
  title: '数据服务',
  items: [
    {
      component: 'Search',
      config: {
        type:"default",
        fields: [
          {
            field: 'name', label: '表单名称', type: 'search',
            props: {
              placeholder: '请输入',
            }
          }
        ],
      },
    },
    {
      component: 'Table',
      config: {
        API: {
          listAPI: apiSettings.listAPI,
          deleteAPI: apiSettings.deleteAPI,
        },
        actions: [
          {
            "title": "新增",
            "type": "path",
            "options": {
              style: "primary",
              "path": "dataService/dataService-add"
            }
          },
        ],
        fields: [
          { field: 'name', label: '表单名称' },
          { field: 'note', label: '备注' },
        ],
        operation: [
          {
            title: '设计字段', type: 'path',
            options:{
              outside: true,
              path: "dataService/dataService-designAttrs",
              query:{
                entityName: 'entityName'
              }
            }
          },
          {
            title: '设计字段值', type: 'path',
            options:{
              outside: true,
              path: "dataService/dataService-designAttrsValue",
              query:{
                entityName: 'entityName'
              }
            }
          },
          {
            title: '编辑', type: 'path',
            options:{
              outside: true,
              path: "dataService/dataService-edit"
            }
          },
          {
            title: '删除', type: 'delete'
          }
        ]
      },
    },
  ],
};
