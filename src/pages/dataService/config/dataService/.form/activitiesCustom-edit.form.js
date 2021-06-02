const API = require('../.setting/activitiesCustom.js');

module.exports = {
  "layout": "BaseTitle",
  "title": "编辑",
  "items": [
    {
      "layout": "Content",
      "component": "custom_form_fr",
      "config": {
        "layout": "Grid",
        "layoutConfig": {
          "value": [12, 12]
        },
        "fields": [
          {
            "field":"menuId",
            "label":"菜单选择",
            "type":"select-fetch",
            "props":{
              "style":{
                "width":"240px"
              }
            },
            "options":{
              "API":"/api/crud/menu/custom/group?_t=1622176307848",
              "label":"menuName",
              "value":"id"
            }
          },
          {
            "label": "表单标识",
            "field": "entityName",
            "type": "input",
            "props": {
              "placeholder": "请输入英文"
            },
            "rules": [
              "required"
            ],
            "span":24
          },
          {
            "label": "表单名称",
            "field": "name",
            "type": "input",
            "props": {
              "placeholder": "请输入表单的名称"
            },
            "rules": [
              "required"
            ],
            "span": 24,
          },
          
          {
            "label": "类别",
            "field": "typeId",
            "span": 24,
            "type": "modal-radio",
            "props": {},
            "rules": [
              "required"
            ],
            "options": {
              "title": "选择类别",
              "label": "typeName",
              "editLabel": "typeName",
              "value": "id",
              "pagination": true,
              "API": "/api/crud/eavEntityType/eavEntityTypes",
              "fields": [
                {
                  "label": "名称",
                  "field": "name",
                  "valueType": 'ellipsis'
                },
                {
                  "label": "备注",
                  "field": "note",
                  "valueType": 'ellipsis'
                },
                // {
                //   "options": {
                //     "map": {
                //       "NOT_START": "未出工",
                //     },
                //     "colorMap": {
                //       "NOT_START": "#1890ff",
                //     }
                //   },
                //   "className": "",
                //   "valueType": "tag",
                //   "field": "status",
                //   "label": "状态"
                // },
              ]
            }
          },
          {
            "label": "备注",
            "field": "note",
            "type": "text-area",
            "props": {
              "placeholder": "请输入表单的更多信息"
            },
            "autoSize": {
              "minRows": 10
            },
            "showCount":"true",
            "maxLength":"200",
            "rules": [],
            "span": 12
          },

        ],
        "API": {
          getAPI: API.getAPI,
          updateAPI: API.updateAPI
        },
        otherProps:{
          nextBtn: '下一步',
          nextPageUrl: 'activitiesCustom-schema'
        }
      }
    },
  ],
  "id": "8lw4lj1f"
}
