const API = require('../.setting/activities.js');
const childFormFields = require('./childFormFields');

module.exports = {
  "layout": "BaseTitle",
  "title": "出工管理",
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
            "label": "项目",
            "field": "projectId",
            span: 24,
            "type": "modal-radio",
            "props": {},
            "rules": [
              "required"
            ],
            "options": {
              "title": "选择项目",
              "label": "name",
              "editLabel": "projectName",
              "value": "id",
              pagination: true,
              "API": "/api/crud/project/projects",
              "fields": [
                {
                  "label": "名称",
                  "field": "name",
                  valueType: 'ellipsis'
                },
                {
                  "label": "检测合同委托方",
                  "field": "categoryName",
                  valueType: 'ellipsis'
                },
                {
                  "label": "备注",
                  "field": "note",
                  valueType: 'ellipsis'
                },
                {
                  "options": {
                    "map": {
                      "NOT_START": "未出工",
                      "WORK_IN_PROCESS": "检测中",
                      "CHECK_COMPLETED": "检测完成",
                      "REPORT_ALREADY": "已出报告",
                      "NORMAL_ENDED": "正常结束",
                      "FORCED_ENDED": "强制结束"
                    },
                    "colorMap": {
                      "NOT_START": "#1890ff",
                      "WORK_IN_PROCESS": "#1891ff",
                      "CHECK_COMPLETED": "#1892ff",
                      "REPORT_ALREADY": "#1893ff",
                      "NORMAL_ENDED": "#1894ff",
                      "FORCED_ENDED": "#1895ff"
                    }
                  },
                  "className": "",
                  "valueType": "tag",
                  "field": "status",
                  "label": "状态"
                },
              ]
            }
          },

          {
            "label": "出工名称",
            "field": "name",
            "type": "input",
            "props": {
              "placeholder": "请输入……"
            },
            "rules": [
              "required"
            ]
          },

          {
            "label": "状态",
            "field": "status",
            "type": "select",
            "props": {},
            "rules": [
              "required"
            ],
            "options": [
              {
                "label": "等待出工",
                "value": '1'
              },
              {
                "label": "出工完成",
                "value": '2'
              },
              {
                "label": "作废",
                "value": '3'
              }
            ]
          },
          {
            "label": "出工节点",
            "field": "checkNotes",
            "type": "checkbox",
            options: [
              { label: '桩、承台', value: '桩、承台' },
              { label: '地梁', value: '地梁' },
              { label: '人工接地体', value: '人工接地体' },
              { label: '引下线（备注项说明楼号、层数）', value: '引下线' },
              { label: '等电位连接环（备注项说明楼号、层数）', value: '等电位连接环' },
              { label: '接闪带（备注项说明楼号）', value: '接闪带' },
              { label: '接闪网（备注项说明楼号）', value: '接闪网' },
              { label: '接闪杆（备注项说明楼号）', value: '接闪杆' },
              { label: '等电位连接', value: '等电位连接' },
              { label: '电涌保护器', value: '电涌保护器' },
            ],
            span: 24,
          },

          {
            "label": "出工日期",
            "field": "createTime",
            "type": "date",
            "props": {
              "placeholder": "请选择日期"
            },
            "rules": [],
          },
          {
            "label": "备注",
            "field": "note",
            "type": "text-area",
            "props": {
              "placeholder": "请输入……"
            },
            "rules": [],
            "span": 24
          },
          {
            label: '',
            field: 'children',
            type: 'one-mary',
            span: 24,
            options: {
              actions: [
                {
                  title: '选择出工人员', type: 'children-modal-add', options: {
                    modalTitle: '出工人员',
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
                { label: '出工人名称', field: 'name' },
                { label: '出工人性质', field: 'categoryId' },
                { label: '出工费用/天', field: 'charge' },
                {
                  label: '出工时长类型', field: 'workTimeType', valueType: 'input-select-fetch',
                  options: {
                    API: '/api/crud/kehai/workTimeTypeDetails',
                    label: 'typeName',
                    value: 'typeName',
                  },

                },
                { label: '出工时长', field: 'workTime', valueType: 'input-number' },
                { label: '里程（KM）', field: 'kmCount', valueType: 'input-number' },
                { label: '路费', field: 'travellingExpenses', valueType: 'input-number' },
                { label: '其他费用', field: 'othersFree', valueType: 'input-number' },
                { label: '备注', field: 'note', valueType: 'input-text' },
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
          "getAPI": API.getAPI,
          "updateAPI": API.updateAPI
        }
      }
    },
  ],
  "id": "8lw4lj1f"
}
