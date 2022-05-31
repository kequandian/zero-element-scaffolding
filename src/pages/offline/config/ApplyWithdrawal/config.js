const setting = require('./.setting/applyWithdrawal.js');

module.exports = {
  layout: 'Content',
  title: setting.pageName,
  items: [
    {
      layout: 'Empty',
      component: 'Search',
      config: {
        share: 'applyWithdrawal',
        fields: [
          {
            "field": "search",
            "label": "搜索",
            "type": "input"
          }
        ],
      },
    },
    {
      layout: 'Empty',
      component: 'TreeList',
      config: {
        share: 'applyWithdrawal',
        API: {
          listAPI: setting.listAPI,
          deleteAPI: setting.deleteAPI,
        },
        actions: [],
        fields: [
          {
            "options": {},
            "className": "",
            "field": "allianceName",
            "label": "班主名称"
          },
          {
            "options": {},
            "className": "",
            "field": "balance",
            "label": "申请提现金额",
            valueType: 'currency',
            align: 'right',
          },
          {
            "options": {
              "map": {
                "0": "等待审批",
                "1": "审批通过",
                "2":"拒绝提现"
              },
              "chy": {
                "0": "warning",
                "1": "safe",
                "2":"danger"
              }
            },
            "className": "",
            "valueType": "tag",
            "theme":"security",
            "type":"Dot",
            "field": "status",
            "label": "审批状态"
          },
          {
            "options": {},
            "className": "",
            "field": "createTime",
            "label": "申请时间"
          },
          {
            "options": {},
            "className": "",
            "field": "note",
            "label": "备注"
          }
        ],
        operation: [
          {
            "title": "删除",
            "type": "delete",
            "options": {
              "outside": false,
              "API": "/api/crud/bonus/offlineWithdrawals/(id)"
            },
            "expect": {
              "field": "status",
              "value": "/(1|2)/",
            }
          },
          {
            "title": "拒绝",
            "type": "modal",
            "options": {
              "icon":"setting",
              "outside": false,
              "modalTitle":"备注",
              "modalWidth":700,
              layout: 'Empty',
              items: [
                {
                  layout: 'Grid',
                  layoutConfig: {
                    value: [24,0],
                  },
                  component: 'Form',
                  config: {
                    API: {
                      createAPI: '/api/crud/bonus/offlineWithdrawals/notPass/(id)',
                    },
                    fields: [
                      {
                        field:"note",label:"备注",type:"text-area",
                        "props": {
                          "placeholder": "请输入备注",
                          autoSize: {
                            minRows: 5,
                          }
                        },
                      }
                    ],
                  },
                }
              ],
            },
            "expect": {
              "field": "status",
              "value": 0,
            }
          },
          {
            "title": "通过审批",
            "type": "request",
            "options": {
              "outside": true,
              "API": "/api/crud/bonus/offlineWithdrawals/pass/(id)",
              "method": "post"
            },
            "expect": {
              "field": "status",
              "value": 0,
            }
          }
        ],
      },
    },
  ],
};
