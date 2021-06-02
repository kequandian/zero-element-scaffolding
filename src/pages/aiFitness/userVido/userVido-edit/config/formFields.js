module.exports = [
  {
    label: '纠正模型中文名称',
    props: {
      placeholder: '纠正模型中文名称'
    },
    type: 'text-area',
    //type: 'input',
    field: 'correctionModel'
  },
  {
    label: '纠正模型英文名称',
    props: {
      placeholder: '请输入纠正模型英文名称'
    },
    type: 'text-area',
    field: 'modelEnglishName'
  },
  {
    label: '话术描述',
    props: {
      placeholder: '请输入话话术描述'
    },
    type: 'text-area',
    field: 'collectionTerm'
  },

];
