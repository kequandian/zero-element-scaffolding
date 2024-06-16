export default {
  layout: 'Content',
  title: '退货处理',
  items: [
    {
      span: 24,
      layout: 'Empty',
      component: 'Search',
      config: {
        share: 'product',
        layoutConfig: {
          buttonSpan: 4,
          value: [6, 5, 9, 4],
          collapse: 3
        },
        fields: [
          { field: 'search', label: '搜索', type: 'input', placeholder: '订单号/产品名称/用户名' },
          {
            field: 'status', label: '状态', type: 'select',
            options: [
              { label: '待退货', value: 'CANCELED_RETURN_PENDING' },
              { label: '待退款', value: 'CANCELED_REFUND_PENDING' },
              { label: '已退款', value: 'CLOSED_REFUNDED' },
            ]
          },
          {
            field: 'time', label: '下单时间', type: 'range',
          },
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
          listAPI: '/api/crud/order/orders/refunds',
          deleteAPI: '/api/crud/order/orders/(id)'
        },
        fields: [
          { field: 'cover', label: '封面', valueType: 'image' },
          { label: '退货用户', field: 'userName' },
          {
            field: 'orderNumber', label: '订单号',
            valueType: 'path',
            options: {
              path: '/order/orderView',
            }
          },
          {
            field: 'status', label: '状态', valueType: 'tag',
            theme:"option",
            type:"default",
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
                'CONFIRMED_DELIVER_PENDING': 'purple',
                'DELIVERING': 'gray',
                'DELIVERED_CONFIRM_PENDING': 'cyan',
                'CANCELED_RETURN_PENDING': 'gray',
                'CLOSED_CONFIRMED': 'orange',
                'CANCELED_REFUND_PENDING': 'purple_dark',
                'CLOSED_REFUNDED': 'gray',
                'CONFIRMED_PICK_PENDING': 'gray'
              }
            }
          },
          {
            field: 'refundFee', label: '退款金额',
            align: 'right', valueType: 'currency',
            options: {
              color: '#ff2233',
            },
          },
          {
            field: 'paymentType', label: '支付类型', valueType: 'tag',
            theme:"priority",
            type:"Dot",
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
          {
            field: 'deliveryType', label: '配送方式', valueType: 'tag',
            type:"Online",
            theme:"option",
            options: {
              map: {
                'EXPRESS': '快递',
                'SELF_PICK': '自提',
                'FLASH': '极速送达'
              },
              chy:{
                'EXPRESS': 'purple',
                'SELF_PICK': 'blue',
                'FLASH': 'cyan'
              }
            }
          },
          {
            field: 'origin', label: '来源', valueType: 'tag',
            type:"default",
            theme:"priority",
            options: {
              map: {
                'WPA': '微信公众号',
                'MINI_PROGRAM': '小程序',
                'APP_ANDROID': '手机应用程序',
                'APP_IOS': '手机应用程序',
                'IPAD': '手机应用程序',
                'OTHER': '其他'
              },
              chy:{
                'WPA': 'P1',
                'MINI_PROGRAM': 'P2',
                'APP_ANDROID': 'P3',
                'APP_IOS': 'P3',
                'IPAD': 'P3',
                'OTHER': 'P4'
              }
            }
          },
          {
            field: 'totalPrice', label: '价格',
            align: 'right', valueType: 'currency',
          },
          { field: 'createdDate', label: '下单时间' },

          { field: 'operation' }
        ],
        operation: [
          {
            title: '详情', type: 'path',
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
          /* {
             title: '删除', type: 'delete'
           }*/
        ],
      },
    },
  ]
}
