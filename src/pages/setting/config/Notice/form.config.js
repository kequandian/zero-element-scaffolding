module.exports = [
  {
    field: 'empty_1', label: '', type: 'group',value:'基本信息', span: 24,
  },
  {
    field: 'name', label: '广告名', type: 'input', span: 12,
  },


  {
    field: 'groupId', label: '分类', type: 'modal-radio',
    options: {
      title: '选择分类',
      API: '/api/pub/ad/groups',
      label: 'name',//对应查出表中的id
      editLabel: '',//对应原有表中的字段

      fields: [
        { label: '通知标题', field: 'title' },
        { label: '标识', field: 'identifier' },

      ],
    },
    rules: ['required'],
  },

  {
    field: 'image', label: '广告图片', type: 'upload-image',
    options: {
      API: '/api/fs/uploadfile',
      max: 1
    },
    span: 12
  },



];
