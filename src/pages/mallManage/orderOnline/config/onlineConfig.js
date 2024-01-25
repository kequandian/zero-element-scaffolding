export default {
  layout: 'Content',
  title: '线上订单',
  items: [
    {
      layout: 'Empty',
      component: 'Search',
      config: {
        share: 'product',
        layoutConfig: {
          buttonSpan: 4,
          value: null,
          collapse: 3
        },
        fields: [
          { field: 'search', label: '搜索', type: 'input', span: 6, placeholder: '订单号/产品名称/购买用户' },
          /* { field: 'orderNumber', label: '订单号', type: 'input' },*/
          {
            field: 'status', label: '状态', type: 'select', span: 6,
            options: [
              { label: '待支付', value: 'CREATED_PAY_PENDING' },
              { label: '支付超时关闭', value: 'CLOSED_PAY_TIMEOUT' },
              { label: '已取消', value: 'CLOSED_CANCELED' },
              { label: '已支付', value: 'PAID_CONFIRM_PENDING' },
              { label: '待发货', value: 'CONFIRMED_DELIVER_PENDING' },
              { label: '发货中', value: 'DELIVERING' },
              { label: '已发货', value: 'DELIVERED_CONFIRM_PENDING' },
              { label: '待退货', value: 'CANCELED_RETURN_PENDING' },
              { label: '已确认收货', value: 'CLOSED_CONFIRMED' },
              { label: '待退款', value: 'CANCELED_REFUND_PENDING' },
              { label: '已退款', value: 'CLOSED_REFUNDED' },
              { label: '待取货', value: 'CONFIRMED_PICK_PENDING' },
            ]
          },
          /*  { field: 'pName', label: '产品名称', type: 'input' },
            { field: 'barcode', label: '条形码', type: 'input' },
            { field: 'contactUser', label: '收货人', type: 'input' },*/
          /*  { field: 'phone', label: '联系电话', type: 'input' },*/

          {
            field: 'paymentType', label: '支付类型', type: 'select', span: 6,
            options: [
              { label: '微信支付', value: 'WECHAT' },
              { label: '积分支付', value: 'POINT' },
              { label: '线下支付', value: 'STORE' },
              { label: '零钱钱包', value: 'WALLET' },
              { label: '现金', value: 'CASH' },
              { label: '支付宝', value: 'ALIPAY' },
              { label: '银行卡', value: 'CARD' },
            ]
          },
          {
            field: 'time', label: '下单时间', type: 'range',
            span: 10,
          },
          {
            field: 'searchMoney', label: '价格', type: 'number-range',
            span: 6,
          },

          /* { field: 'startTime', label: '开始时间', type: 'date' },
           { field: 'endTime', label: '结束时间', type: 'date' },*/
        ]
      }
    },
    {
      span: 24,
      layout: 'Empty',
      component: 'TreeList',
      config: {
        share: 'product',
        // scroll:{x:2750},
        API: {
          listAPI: '/api/crud/order/orders?type=ORDER',
          deleteAPI: '/api/crud/order/orders/(id)'
        },
        fields: [
          { field: 'cover', label: '封面', valueType: 'image' },
          {
            field: 'orderNumber', label: '订单号',
            valueType: 'path',
            options: {
              path: '/mallManage/orderOnline/orderView',
            }
          },
          { label: '购买用户', field: 'userName' },

          {
            field: 'totalPrice', label: '价格',
            align: 'right', valueType: 'currency',
          },
          {
            field: 'couponPrice', label: '优惠券价格',
            align: 'right', valueType: 'currency',
          },
          {
            field: 'status', label: '状态', valueType: 'tag',
            type: "default",
            theme: "option",
            options: {
              map: {
                'CREATED_PAY_PENDING': '待支付',
                'CLOSED_PAY_TIMEOUT': '支付超时关闭',
                'CLOSED_CANCELED': '已取消',
                'PAID_CONFIRM_PENDING': '已支付',
                'CONFIRMED_DELIVER_PENDING': '待发货',
                'DELIVERING': '发货中',
                'DELIVERED_CONFIRM_PENDING': '已发货',
                'CANCELED_RETURN_PENDING': '待退货',
                'CLOSED_CONFIRMED': '已确认收货',
                'CANCELED_REFUND_PENDING': '待退款',
                'CLOSED_REFUNDED': '已退款',
                'CONFIRMED_PICK_PENDING': '待取货'
              },
              chy: {
                'CREATED_PAY_PENDING': 'blue',
                'CLOSED_PAY_TIMEOUT': 'gray',
                'CLOSED_CANCELED': 'gray',
                'PAID_CONFIRM_PENDING': 'gray',
                'CONFIRMED_DELIVER_PENDING': 'purple_dark',
                'DELIVERING': 'gray',
                'DELIVERED_CONFIRM_PENDING': 'cyan',
                'CANCELED_RETURN_PENDING': 'gray',
                'CLOSED_CONFIRMED': 'orange',
                'CANCELED_REFUND_PENDING': 'gray',
                'CLOSED_REFUNDED': 'gray',
                'CONFIRMED_PICK_PENDING': 'gray'
              }
            }
          },


          {
            field: 'paymentType', label: '支付类型', valueType: 'tag',
            type: "Dot",
            theme: "priority",
            options: {
              map: {
                'WECHAT': '微信支付',
                'ALIPAY': '支付宝',
                'POINT': '积分支付',
                'STORE': '线下支付',
                'WALLET': '零钱钱包',
                'CASH': '现金',
                'CARD': '银行卡'
              },
              chy: {
                'WECHAT': 'P1',
                'ALIPAY': 'P2',
                'POINT': 'P3',
                'STORE': 'P4',
                'WALLET': 'P5',
                'CASH': 'P1',
                'CARD': 'P2'
              }
            }
          },
          {
            field: 'deliveryType', label: '配送方式', valueType: 'tag',
            type: "Online",
            theme: "option",
            options: {
              map: {
                'EXPRESS': '快递',
                'SELF_PICK': '自提',
                'FLASH': '极速送达'
              },
              chy: {
                'EXPRESS': 'purple',
                'SELF_PICK': 'blue',
                'FLASH': 'cyan'
              }
            }
          },
          {
            field: 'origin', label: '来源', valueType: 'tag',
            type: "default",
            theme: "priority",
            options: {
              map: {
                'WPA': '微信公众号',
                'MINI_PROGRAM': '小程序',
                'APP_ANDROID': '手机应用程序',
                'APP_IOS': '手机应用程序',
                'IPAD': '手机应用程序',
                'OTHER': '其他'
              },
              chy: {
                'WPA': 'P1',
                'MINI_PROGRAM': 'P2',
                'APP_ANDROID': 'P3',
                'APP_IOS': 'P3',
                'IPAD': 'P3',
                'OTHER': 'P4'
              }
            }
          },


          { field: 'createdDate', label: '下单时间' },

          // 显示分配的客服
          { field: 'assistantName', label: '客服' },

          { field: 'operation' }
        ],
        operation: [
          {
            title: '查看', type: 'path',
            options: {
              outside: true,
              path: '/mallManage/orderOnline/orderView',
              // permission:'apply.view',
              // location:true
              queryData: (records) => {
                const data = {
                  id: records.id,
                }
                return data
              }
            }
          },
          {
            title: '取消订单', type: 'request',
            options: {
              API: '/api/crud/order/orders/(id)/CLOSED_CANCELED',
              method: 'post',
              tips: '确定要取消该订单吗?',
            },
            "expect": {
              "field": "status",
              "value": "CREATED_PAY_PENDING"
            }
          },
          {
            title: '取消订单', type: 'request',
            options: {
              outside: true,
              API: '/api/crud/order/orders/status/cancelOrder/(id)',
              method: 'post',
              tips: '确定要取消该订单吗?',
            },
            "expect": {
              "field": "status",
              "value": "CONFIRMED_DELIVER_PENDING"
            }
          },
          {
            title: '发货', type: 'request',
            options: {
              outside: true,
              expectedField: ['status'],
              expectedValue: ['CONFIRMED_DELIVER_PENDING'],
              API: '/api/crud/order/orders/(id)/DELIVERED_CONFIRM_PENDING',
              method: 'post',
              tips: '确定货物已发送吗?',
            },
            "expect": {
              "field": "status",
              "value": "CONFIRMED_DELIVER_PENDING"
            }
          },
          // 分配客服按钮
          {
            "title": "分配客服",
            "type": "modal",
            "options": {
              "modalTitle": "分配客服",
              "modalWidth": 750,
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
                      "getAPI": "/api/crud/order/orders/(id)",
                      "updateAPI": "/api/crud/order/orders/(id)"
                    },
                    "fields": [
                      {
                        "label": "订单号",
                        "type": "plain",  
                        "field": "orderNumber"
                      },
                      {
                        "label": "分配客服",
                        "field": "assistantName",
                        "type": "modal-radio",
                        "props": {},
                        "rules": [],
                        "options": {
                          "title": "选择客服",
                          "placeholder": "请选择",
                          "value": "id",
                          "label": "name",
                          "API": "/api/adm/users/select-custom-service",
                          "saveData": {
                            "assistantName": "name"
                          },
                          "fields": [
                            {
                              "label": "客服名称",
                              "field": "name"
                            }
                          ]
                        }
                      },
                    ]
                  }
                }
              ]
            },
            "expect": {
              "permission": ""
            }
          },
        ],
      },
    },
  ]
}
