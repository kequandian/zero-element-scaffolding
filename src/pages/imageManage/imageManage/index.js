import React from 'react';
import ZEle from 'zero-element';

const formFields = require('./formFields');

const config = {
  layout: 'Content',
  title: '图片管理',
  items: [
    {
      layout: 'Empty',
      component: 'Search',
      config: {
        fields: [
          { field: 'name', label: '图片名称', type: 'input', placeholder: '请输入' },
        ]
      }
    },
    {
      component: 'Table', //subCategoryList
      config: {
        API: {
          listAPI: '/api/gw/portal/images',
          deleteAPI: '/api/gw/portal/images/(id)'
        },
        actions: [
        /*  {
            title: '添加', type: 'modal',
            options: {
              modalTitle: '添加图片',
              modalWidth: 500,
              items: [
                {
                  layout: 'Empty',
                  component: 'Form',
                  config: {
                    layout: 'Grid',
                    API: {
                      createAPI: '/api/gw/portal/uploadImages'
                    },
                    fields: formFields,
                  }
                }
              ]
            }
          },*/
          // {
          //   title: '生成 HTML',
          //   type: 'request',
          //   options: {
          //     API: '/api/gw/portal/images/replace',
          //     method: 'put',
          //   },
          // }
        ],
        fields: [
          { "label": "编号", "field": "code", "valueType": "index" },
          {
            "field": "url",
            "label": "图片",
            "valueType": "image"
          },
          {
            label: "名称",
            field: "name"
          }
        ],
        operation: [
          {
            title: '编辑', type: 'modal',
            options: {
              outside: true,
              modalTitle: '编辑图片',
              modalWidth: 500,
              layout: 'Empty',
              items: [
                {
                  layout: 'Empty',
                  component: 'Form',
                  config: {
                    layout: 'Grid',
                    API: {
                      getAPI: '/api/gw/portal/images/(id)',
                      updateAPI: '/api/gw/portal/images/(id)',
                    },
                    fields: formFields,
                  }
                }
              ]
            }
          }
        ],
      },
    },
  ]
}

export default ()=>{
  return <ZEle namespace="img_manage" config={config} />
};
