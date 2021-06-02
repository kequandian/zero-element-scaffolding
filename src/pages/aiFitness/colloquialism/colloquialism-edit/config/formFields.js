module.exports = [
  // {
  //   label: '纠正模型中文名称',
  //   props: {
  //     placeholder: '纠正模型中文名称'
  //   },
  //   type: 'text-area',
  //   //type: 'input',
  //   field: 'correctionModel'
  // },
  // {
  //   label: '纠正模型英文名称',
  //   props: {
  //     placeholder: '请输入纠正模型英文名称'
  //   },
  //   type: 'text-area',
  //   field: 'modelEnglishName'
  // },
  // {
  //   label: '纠正模型话术描述',
  //   props: {
  //     placeholder: '请输入纠正模型话术描述'
  //   },
  //   type: 'text-area',
  //   field: 'collectionTerm'
  // },
  {
    label: '纠正ID', field: 'correctionModel', type: 'input', rules: [
      {
        "type": "required"
      }
    ],
    width: '350px'
  },
  {
    label: '纠正说明', field: 'modelEnglishName', type: 'input', rules: [
      {
        "type": "required"
      }
    ],
    width: '350px'
  },
  {
    label: '话术描述', field: 'collectionTerm', type: 'text-area', rules: [
      {
        "type": "required"
      }
    ],
    props:{
      style:{
        width: '350px'
      },
      autoSize: {
          minRows: 3,
      }
    }
  }

];
