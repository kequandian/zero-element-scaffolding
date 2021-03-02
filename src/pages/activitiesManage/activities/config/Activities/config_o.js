const setting = require('./.setting/activities.js');

module.exports = {
  layout: 'Content',
  title: setting.pageName,
  items: [
    {
      layout: 'Empty',
      component: 'Search',
      config: {
        share: 'activities',
        fields: [
          {
            "field": "name",
            "label": "表单名称",
            "type": "input"
          },
          {
            field: 'time', label: '时间', type: 'range',
            span: 10,
            style: {
              width: 440,
            }
          },
        ],
      },
    },
    {
      layout: 'Empty',
      component: 'Table',
      config: {
        share: 'activities',
        API: {
          listAPI: setting.listAPI,
          deleteAPI: setting.deleteAPI,
        },
        actions: [
          {
            "title": "新增",
            "type": "path",
            "options": {
              "path": "/activitiesManage/activities/activities-add"
            }
          },
          // {
          //   title: '导出 pdf', type: 'export',
          //   options: {
          //     API: '/api/io/pdf/export/项目出工管理',
          //     method: 'get',

          //   },
          // },
        ],
        fields: [
          {
            "options": {},
            "field": "name",
            "label": "表单名称",
            valueType: 'ellipsis',
          },
          {
            "options": {
              "map": {
                "1": "等待出工",
                "2": "出工完成",
                "3": "作废"
              },
              "colorMap": {
                "1": "#669977",
                "2": "#1890ff",
                "3": "#888888"
              }
            },
            "valueType": "tag",
            "field": "status",
            "label": "状态"
          },

          /* {
             "options": {},
             "field": "totalSpent",
             "label": "出工总费用",
             valueType: 'currency',
           },*/

          // {
          //   "field": "createTime",
          //   "label": "出工日期"
          // },
          {
            "options": {},
            "field": "note",
            "label": "备注",
            valueType: 'ellipsis',
            width: 200
          }
        ],
        operation: [
          {
            "title": "编辑",
            "type": "path",
            "options": {
              "outside": true,
              "path": "/activitiesManage/activities/activities-edit"
            }
          },
          // {
          //   "title": "等待出工",
          //   "type": "request",
          //   "options": {
          //     "outside": false,
          //     "API": "/api/crud/project/activities/action/(id)/unstarted",
          //     "method": "post"
          //   },
          //   "expected": {}
          // },
          {
            "title": "删除",
            "type": "delete",
            "options": {
              "outside": false,
              "API": "/api/crud/project/activities/(id)"
            },
            "expected": {}
          }
        ],

      },
    },
  ],
};
