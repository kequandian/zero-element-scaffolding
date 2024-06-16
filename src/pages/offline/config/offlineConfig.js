export default {
  layout: 'Content',
  title: '线下订单',
  items: [
    {
      span: 24,
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
          /* { field: 'orderNumber', label: '订单号', type: 'input' },
           { field: 'contactUser', label: '收货人', type: 'input' },*/
          { field: 'search', label: '搜索', type: 'input', placeholder: '订单号/产品名称/下单用户', span: 6 },
          {
            field: 'status', label: '状态', type: 'select',
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
            ],
            span: 6,
          },
          {
            field: 'searchMoney', label: '价格', type: 'number-range',
            span: 6,
          },
          {
            field: 'time', label: '下单时间', type: 'range',
            span: 10,
          },



          /*{
            field: 'paymentType', label: '支付类型', type: 'select',
            options: [
              { label: '微信支付', value: 'WECHAT' },
              { label: '积分支付', value: 'POINT' },
              { label: '线下支付', value: 'STORE' },
              { label: '零钱钱包', value: 'WALLET' },
              { label: '现金', value: 'CASH' },
              { label: '支付宝', value: 'ALIPAY' },
              { label: '银行卡', value: 'CARD' },
            ]
          },*/
        ]
      }
    },
    {
      span: 24,
      layout: 'Empty',
      component: 'TreeList',
      config: {
        share: 'product',
        API: {
          listAPI: '/api/crud/order/orders?type=STORE_ORDER',
          deleteAPI: '/api/crud/order/orders/(id)'
        },
        actions: [
          {
            title: '添加订单', type: 'path',
            options: {
              "style": "primary",
              icon: 'plus',
              path: 'order-add',
            }
          }
        ],
        fields: [

          {
            "field": "cover",
            "label": "封面",
            valueType: 'image',

          },
          {
            field: 'orderNumber', label: '订单号',
            valueType: 'path',
            options: {
              path: '/order/orderView',
            }
          },

          /* { field: 'storeGuideUserName', label: '结算店铺/收银员' },*/
          { label: '发货用户', field: 'userName' },

          {
            field: 'totalPrice', label: '订单总价',
            align: 'right', valueType: 'currency',
          },

          {
            field: 'couponPrice', label: '优惠券价格',
            align: 'right', valueType: 'currency',
          },


          {
            field: 'status', label: '状态', valueType: 'tag',
            type:"default",
            theme:"option",
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
            type:"Dot",
            theme:"priority",
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
              chy:{
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
          { field: 'createdDate', label: '下单时间' },

          { field: 'operation' }
        ],
        operation: [
          {
            title: '查看', type: 'path',
            options: {
              outside: true,
              path: '/order/orderView',
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
            title: '确认收货', type: 'request',
            options: {
              outside: true,
              // expectedField: 'status',
              // expectedValue: 'DELIVERED_CONFIRM_PENDING',
              API: '/api/crud/friend/momentsFriends/order/status/closeConfirmed/(id)',
              method: 'post',
              tips: '确认货物已收到?',
            },
            "expect": {
              "field": "status",
              "value": "DELIVERED_CONFIRM_PENDING"
            }
          },
          {
            title: '取消确认', type: 'request',
            options: {
              outside: true,
              // expectedField: 'status',
              // expectedValue: 'CLOSED_CONFIRMED',
              API: '/api/crud/friend/momentsFriends/order/status/cancelCloseConfirmedOrder/(id)',
              method: 'post',
              tips: '取消已确认的订单?',
            },
            "expect": {
              "field": "status",
              "value": "CLOSED_CONFIRMED"
            }
          },
          {
            title: '取消订单', type: 'request',
            options: {
              outside: true,
              // expectedField: 'status',
              // expectedValue: 'DELIVERED_CONFIRM_PENDING',
              API: '/api/crud/order/orders/status/cancelOrder/(id)',
              method: 'post',
              tips: '确认取消订单吗?',
            },
            "expect": {
              "field": "status",
              "value": "DELIVERED_CONFIRM_PENDING"
            }
          },
          /* {
             title: '删除', type: 'delete'
           }*/
        ],
      },
    },

  ]
}
