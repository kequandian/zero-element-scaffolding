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
          label: '字段类型', field: 'fieldType',
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
        //   label: '字段类型', field: 'fieldType', valueType: 'input-select-fetch',
        //   options: {
        //     API: '/api/crud/kehai/workTimeTypeDetails',
        //     label: 'typeName',
        //     value: 'typeName',
        //   },
        // }
        {
          label: '字段类型', field: 'fieldType', valueType: 'input-select',
          options: {
            options:
              [
                { label: "varchar", value: "varchar" },
                { label: "int", value: "int" },
                { label: "float", value: "float" },
                { label: "data", value: "data" },
              ]
          },
          "rules": ["required"]
        },
      ]
    }
  },
];
