const API = require('./setting-api.js');
const childFormFields = require('./childFormFields');

module.exports = {
  "layout": "BaseTitle",
  "title": "",
  "items": [
    {
      "layout": "Content",
      "component": "custom_form",
      "config": {
        share: 'workFlowList-step',
        "layout": "Grid",
        "layoutConfig": {
          "value": [12, 12]
        },
        "fields": [
          {
            label: '',
            field: 'children',
            type: 'one-mary',
            span: 24,
            options: {
              actions: [
                {
                  "title": "添加",
                  "type": "modal",
                  "options": {
                    "style": "primary",
                    "modalTitle": "添加",
                    "modalWidth": 600,
                    "items": [
                      {
                        "component": "Form",
                        "config": {
                          "layout": "Grid",
                          "layoutConfig": {
                            "value": [
                              24
                            ]
                          },
                          "API": {
                            "createAPI": "/api/wf/processes/[id]/steps"
                          },
                          "fields": [
                            {
                              "label": "步骤名称",
                              "rules": [
                                {
                                  "type": "required"
                                }
                              ],
                              "props": {
                                "placeholder": "请输入"
                              },
                              "type": "input",
                              "field": "name"
                            },
                            {
                              label: '步骤类型',
                              field: 'type',
                              type: 'select',
                              options: [
                                { label: '开始', value: "START" },
                                { label: '中间', value: "MIDDLE" },
                                { label: '结束', value: "END" }
                              ]
                            },
                            {
                              "label": "下一步骤",
                              "field": "nextSteps",
                              "type": "modal-checkbox",
                              "props": {},
                              "rules": [
                              ],
                              "options": {
                                "title": "选择步骤",
                                "label": "name",
                                "editLabel": "name",
                                "value": "id",
                                pagination: true,
                                "API": "/api/wf/processes/[id]/steps/nextStepsByProcessId",
                                saveData: {
                                  masterRelations: 'value',
                                },
                                "fields": [
                                  {
                                    "label": "名称",
                                    "field": "name"
                                  },
                                  {
                                    "className": "",
                                    "valueType": "tag",
                                    "field": "phone",
                                    "label": "电话"
                                  },
                                ]
                              }
                            },
                            {
                              "label": "",
                              "type": "hidden",
                              "field": "identifier",
                              "value": "workflow"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "expect": {
                    "permission": ""
                  }
                }
              ],
              fields: [
                { label: '步骤名称', field: 'name' },
                {
                  "label": "步骤类型",
                  "field": "type",
                  "valueType": "tag",
                  "options": {
                    "map": {
                      "START": "开始",
                      "MIDDLE": "中间",
                      "END": "结束"
                    },
                    "color": {
                      "START": "#17d349",
                      "MIDDLE": "#DDAF5B",
                      "END": "#D80000"
                    }
                  }
                }
              ],
              operation: [

                {
                  "title": "编辑",
                  "type": "modal",
                  "options": {
                    "modalTitle": "编辑类别",
                    "modalWidth": 600,
                    "outside": true,
                    "items": [
                      {
                        "component": "Form",
                        "config": {
                          "layout": "Grid",
                          "layoutConfig": {
                            "value": [
                              24
                            ]
                          },
                          "API": {
                            "getAPI": "/api/wf/processes/(id)",
                            "updateAPI": "/api/wf/processes/[id]/steps/nextStepsByStepId"
                          },
                          "fields": [
                            {
                              "label": "类别名称",
                              "rules": [
                                {
                                  "type": "required"
                                }
                              ],
                              "props": {
                                "placeholder": "请输入"
                              },
                              "type": "input",
                              "field": "name"
                            },
                            {
                              "field": "formType", "label": "表单类型", "type": "modal-radio",
                              "props": {},
                              "rules": ["required"],
                              "options": {
                                "title": "选择表单类型",
                                "label": "name",
                                "editLabel": "name",
                                "value": "id",
                                "pagination": true,
                                "API": "/api/crud/eavEntityType/eavEntityTypes/entity",
                                "fields": [
                                  {
                                    "label": "类型名称",
                                    "field": "name"
                                  },
                                  {
                                    "label": "类型编码",
                                    "field": "code"
                                  }
                                ]
                              }
                            },
                            {
                              "field": "categoryId", "label": "流程类别", "type": "modal-radio",
                              "props": {},
                              "rules": ["required"],
                              "options": {
                                "title": "选择流程类别",
                                "label": "name",
                                "editLabel": "name",
                                "value": "id",
                                "pagination": true,
                                "API": "/api/categories/all/tree?identifier=workflow",
                                "fields": [
                                  {
                                    "label": "类别名称",
                                    "field": "name"
                                  },
                                  {
                                    "label": "类别编码",
                                    "field": "code"
                                  }
                                ]
                              }
                            },
                            {
                              "label": "",
                              "type": "hidden",
                              "field": "identifier",
                              "value": "workflow"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "expect": {
                    "permission": ""
                  }
                },
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
          "getAPI": API.getAPI,
          "updateAPI": API.updateAPI
        }
      }
    },
  ],
  "id": "8lw4lj1f"
}
