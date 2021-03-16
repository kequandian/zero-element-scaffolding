module.exports = [
  {
    label: '新增列',
    field: 'temp',
    type: 'FieldModalCheckbox',
    span: 24,
    options: {
      API: '/api/eav/entities/attributes/example',
      pagination: true,
      fields: [
        { label: '字段标识', field: 'attributeName' },
        {
          label: '字段名', field: 'fieldName',
        },
        {
          label: '组件类型', field: 'componentType',
        }
      ],
      saveData: {
        venderActivities: 'value', // 数据保存到列表
      },
    },
    rules: ['required'],
  },
  {
    field: 'venderActivities', label: '', type: 'one-mary',
    span: 24,
    options: {
      fields: [
        { label: '字段标识', field: 'attributeName', valueType: 'input-text' },
        { label: '字段名', field: 'fieldName', valueType: 'input-text' },
        // {
        //   label: '组件类型', field: 'componentType', valueType: 'input-select-fetch',
        //   options: {
        //     API: '/api/crud/kehai/workTimeTypeDetails',
        //     label: 'typeName',
        //     value: 'typeName',
        //   },
        // }
        {
          label: '组件类型', field: 'componentType', valueType: 'input-select',
          options: {
            options:
              [
                { label: "输入框", value: "input" },
                { label: "数字输入框", value: "number" },
                { label: "输入框(含金钱符号)", value: "range" },
                { label: "日期", value: "date" },
              ]
          },
          "rules": ["required"]
        },
      ]
    }
  },
];
