module.exports = [
  {
    field: 'productId', label: '产品', type: 'modal-radio',
    options: {
      title: '选择产品',
      API: '/api/crud/order/orders/getProducts',
      label: 'name',//对应查出表中的字段 显示
      editLabel: 'productId',//对应原有表中的字段 要修改的字段
      value: 'id',    //传入数据库中的值 查出来表中的字段
      pagination:true,
      fields: [
        { label: '名字', field: 'name' },
        /*  { label: '条形码', field: 'barcode' },*/
        { label: '单价', field: 'price' ,valueType:'currency'},

      ],
      saveData: {price: "price",
        productId: "id",
        name: "name",
        barcode:"barcode"},
    },
    rules: ['required'],

  },



  {
    "label": "产品名",
    "field": "name",
    "type": 'hidden',

  },

  {
    "label": "总价",
    "field": "totalPrice",
    "type": 'hidden',
  },

  {
    "label": "产品id",
    "field": "id",
    "type": 'hidden',

  },

  {
    "label": "数量",
    "field": "quantity",
    "type": "number",
    "value":1,
    "props": {
      "placeholder": "请输入……",
      "min": 0
    },
    "rules": ["required"],
    span:24
  },

  {
    "label": "单价",
    "field": "price",
    "type": 'hidden',

  },
  {
    "label": "条形码",
    "field": "barcode",
    "type": 'hidden',

  },


];
