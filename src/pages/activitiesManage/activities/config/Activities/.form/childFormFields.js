module.exports = [
  {
    label: '出工人员',
    field: 'temp',
    type: 'modal-checkbox',
    span: 24,
    options: {
      API: '/api/crud/vms/venders',
      pagination: true,
      fields: [
        { label: '昵称', field: 'name' },
        {
          label: '出工人性质', field: 'categoryId',
          valueType: '',
          align: 'right',
        },
        {
          label: '联系电话', field: 'phone',
          valueType: '',
          align: 'right',
        },
        {
          label: '出工费用/天', field: 'charge',
          valueType: '',
          align: 'right',
        },
      ],
      saveData: {
        venderActivities: 'value', // 数据保存到出工人员列表
      },
    },
    rules: ['required'],
  },
  {
    field: 'venderActivities', label: '', type: 'one-mary',
    span: 24,
    options: {
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
        {
          label: '出工时长', field: 'workTime', valueType: 'input-number', options: {
            defaultValue: 0,
          }
        },
        {
          label: '里程（KM）', field: 'kmCount', valueType: 'input-number', options: {
            defaultValue: 0,
          }
        },
        {
          label: '其他费用', field: 'othersFree', valueType: 'input-number', options: {
            defaultValue: 0,
          }
        },
        { label: '备注', field: 'note', valueType: 'input-text' },
      ]
    }
  },
];
