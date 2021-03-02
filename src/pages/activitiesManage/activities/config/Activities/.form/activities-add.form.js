const API = require('../.setting/activities.js');
const childFormFields = require('./childFormFields');

module.exports = {
  "layout": "BaseTitle",
  "title": "新增",
  "items": [
    {
      "layout": "Content",
      "component": "Form",
      "config": {
        "layout": "Grid",
        "layoutConfig": {
          
          "value": [12, 12]
        },
        "fields": [
          {
            "label": "表单标识",
            "field": "entityName",
            "type": "input",
            "props": {
              "placeholder": "请输入……"
            },
            "rules": [
              "required"
            ]
          },
          {
            "label": "表单名称",
            "field": "name",
            "type": "input",
            "props": {
              "placeholder": "请输入……"
            },
            "rules": [
              "required"
            ],
            span: 24,
          },
          {
            "label": "类别",
            span: 24,
            "field": "typeId",
            "type": "modal-radio",
            "props": {},
            "rules": [
              "required"
            ],

            "options": {
              "title": "选择类别",
              "label": "name",
              "editLabel": "typeName",
              "value": "id",
              pagination: true,
              "API": "/api/crud/eavEntityType/eavEntityTypes",
              "fields": [
                {
                  "label": "名称",
                  "field": "name",
                  valueType: 'ellipsis'
                },
                {
                  "label": "备注",
                  "field": "note",
                  valueType: 'ellipsis'
                },
              ]
            }
          },
          {
            "label": "备注",
            "field": "note",
            "type": "text-area",
            "props": {
              "placeholder": "请输入……"
            },
            "rules": [],
            "span": 12
          },
          {
            label: '',
            field: 'children',
            type: 'one-mary',
            span: 24,
            options: {
              actions: [
                {
                  title: '新增列', type: 'children-modal-add', options: {
                    modalTitle: '新增列',
                    modalWidth: 1080,
                    childAppendField: 'venderActivities',
                    items: [
                      {
                        layout: 'Empty',
                        component: 'ChildrenForm',
                        config: {
                          layout: 'Grid',
                          layoutConfig: {
                            value: [12, 12],
                          },
                          API: {},
                          fields: childFormFields,
                        },
                      }
                    ],
                  }
                },
              ],
              fields: [
                { label: '字段标识', field: 'attributeName' },
                { label: '字段名', field: 'fieldName' },
                { label: '字段类型', field: 'fieldType' },
              ],
              operation: [
                {
                  title: '移除', type: 'removeChild',
                  options: {
                    outside: true,
                  }
                },
              ],
            }
          }
        ],
        "API": {
          "createAPI": API.createAPI
        }
      }
    },
  ],
  "id": "8lw4lj1f"
}
