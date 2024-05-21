module.exports = {
    "layout": "BaseTitle",
    "title": "转换为eav",
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
                "label": "eav实体类型",
                "rules": [
                  {
                    "type": "required"
                  }
                ],
                "props": {
                  "placeholder": "请选择eav实体类型",
                  "style": {
                    "width": "240px"
                  }
                },
                "options": [
                  {
                    "label": "表单",
                    "value": "CRUD_FORM"
                  },
                  {
                    "label": "自定义字段",
                    "value": "EXPAND_FORM"
                  },
                  {
                    "label": "数据服务",
                    "value": "DATA_SERVICE"
                  }
                ],
                "type": "select",
                "field": "entityType"
              },
            {
              "label": "租户",
              span: 24,
              "field": "tenantId",
              "type": "modal-radio",
              "props": {},
              "rules": [
                "required"
              ],
  
              "options": {
                "title": "选择租户",
                "label": "name",
                "editLabel": "typeName",
                "value": "id",
                pagination: true,
                "API": "/api/crud/tenants",
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
                "label": "数据库表名",
                "field": "tableName",
                "type": "input",
                "props": {
                  "placeholder": "请输入……"
                },
                // "rules": [
                //   "required"
                // ],
                span: 24,
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
            }
          ],
          "API": {
            createAPI: "/api/crud/apicode/apiTableModel/apiTableModels/switch-eav/[id]"
          },
        }
      },
    ],
    "id": "8lw4lj1f"
  }
  