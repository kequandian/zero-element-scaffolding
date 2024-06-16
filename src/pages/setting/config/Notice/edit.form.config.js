module.exports = [
  // {
  //   field: 'empty_1', label: '', type: 'group',value:'基本信息', span: 24,
  // },
  { field: 'title', label: '公告标题', type: 'input', span: 24, rules: ['required'],},
 /* { field: 'sortNum', label: '排序号', type: 'number', span: 24, },*/


  {
    field: 'type', label: '公告种类', type: 'select', span: 24,
    options: [
      { label: '系统', value: 'System' },
      { label: '内部', value: 'Internal' },
      { label: '外部', value: 'External' },

    ],
  },

  {
    field: 'endTime', label: '到期时间', type: 'date', rules: ['required'],
    options: {
      nowTime: false,
      format: 'YYYY-MM-DD'
    },
    span: 24
  },


  {
    field: 'content', label: '公告内容', type: 'text-area',
    span: 24, rules: ['required'],
    props: {
      autoSize: {
        minRows: 4,
      }
    }
  },


];
