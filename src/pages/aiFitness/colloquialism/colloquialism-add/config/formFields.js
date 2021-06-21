module.exports = [
  {
    label: '模型', field: 'modelName', type: 'select', rules: [
      {
        "type": "required"
      }
    ],
    props:{
      placeholder: '请选择模型',
      style:{
        width: '350px',
      }
    },
    options: [
      { label: 'Keep', value: 'Keep' },
      { label: 'MakeReady', value: 'MakeReady' },
    ]
  },
  {
    label: '模型说明', field: 'correctionModel', type: 'input', rules: [
      {
        "type": "required"
      }
    ],
    width: '350px',
    props: {
      placeholder: '请输入模型说明'
    }
  },
  {
    label: '话术', field: 'collectionTerm', type: 'text-area', rules: [
      {
        "type": "required"
      }
    ],
    props: {
      placeholder: '请输入话术',
      style: {
        width: '450px'
      },
      maxLength: "200",
      showCount: true,
      autoSize: {
        minRows: 7,
      }
    }
  }
];
