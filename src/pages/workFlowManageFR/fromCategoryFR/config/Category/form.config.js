module.exports = [
  {
    field: 'name', label: '分类名称', type: 'input',
    rules: ['required'],
  },
  {
    field: 'note', label: '备注', type: 'text-area',
    props: {
      autoSize: {
        minRows: 3,
      }
    }
  },
  {
    field: 'sortNum',
    label: '排序号',
    type: 'number',
  }
]
