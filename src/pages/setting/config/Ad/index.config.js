const formFields = require('./form.config');
const editFormFields = require('./edit.form.config');

module.exports = {
  layout: 'Content',
  title: '广告配置',
  items: [
    {
      layout: 'Empty',
      component: 'Search',
      config: {
        share: 'ad',
        fields: [
          {
            "field": "search",
            "label": "搜索",
            "type": "input",
            placeholder: '广告名/类型',
          },
         /* {
            field: 'enabled',
            label: '状态',
            type: 'select',
            options: [
              { label: '停用', value: 0 },
              { label: '正常', value: 1 },
            ]
          },*/
        ],
      },
    },
    {
      layout: 'Empty',
      component: 'TreeList',
      config: {
        share: 'ad',
        API: {
          //banner 轮播页
          listAPI: '/api/cms/pub/ad/allGroup/[id]',
          deleteAPI: '/api/cms/ad/(id)',
        },

        actions: [
          {
            title: '添加', type: 'modal',
            options: {
              "style": "primary",
              modalTitle: '添加广告',
              modalWidth: 900,
              items: [
                {
                  layout: 'Empty',
                  component: 'Form',
                  config: {
                    layout: 'Grid',
                    API: {
                      createAPI: '/api/cms/ad/[id]'
                    },
                    fields: formFields,
                  }
                }
              ]
            }
          }
        ],
        fields: [
          {
            "field": "image",
            "label": "广告图片",
            valueType: 'image',

          },

       /*   {
            "field": "type",
            "label": "类型",
          },*/

          {
            "field": "name",
            "label": "广告名"
          },

          {
            "field": "enabled",
            "valueType": "tag",
            "label": "状态",
            "theme":"status",
            "type":"default",
            options: {
              map: {
                '0': '停用',
                '1': '正常',
              },
              chy: {
                '0': 'close',
                '1': 'open',
              }
            }
          },

        ],
        operation: [
          {
            title: '编辑', type: 'modal',
            options: {
              modalTitle: '编辑广告',
              modalWidth: 800,
              outside: true,
              layout: 'Empty',
              items: [
                {
                  layout: 'Empty',
                  component: 'Form',
                  config: {
                    layout: 'Grid',
                    API: {
                      getAPI: '/api/cms/pub/ad/(id)',
                      updateAPI: '/api/cms/ad/(id)',
                    },
                    fields: editFormFields,
                  }
                }

              ]
            }
          }
          ,
          {
            title: '停用', type: 'request',
            options: {
              outside: true,
              expectedField: 'enabled',
              expectedValue: 1,
              API: '/api/cms/ad/(id)/disable',
              method: 'put',
            },
            "expect": {
              "field": "enabled",
              "value": 1
            }
          },
          {
            title: '启用', type: 'request',

            options: {
              outside: true,
              expectedField: 'enabled',
              expectedValue: 0,
              API: '/api/cms/ad/(id)/enable',
              method: 'put',
            },
            "expect": {
              "field": "enabled",
              "value": 0
            }
          },
          {
            title: '删除', type: 'delete',
            // options: {
            //   outside: true
            // }
          }


        ]
      },
    },
  ],
};
