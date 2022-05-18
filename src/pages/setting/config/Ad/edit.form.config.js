module.exports = [
/*  {
    field: 'empty_1', label: '', type: 'group',value:'基本信息', span: 24,
  },*/
  {
    field: 'name', label: '广告名', type: 'input', span: 12,rules: ['required'],
  },

/*  {
    field: 'type', label: '类型', type: 'input', span: 24,
  },*/



  {
    field: 'strategyArray', label: '广告策略', type: 'checkbox',
    options: [
      { label: '每天', value: 'EVERY_DAY' },
      { label: '单号', value: 'ODD_DAY' },
      { label: '双号', value: 'EVEN_DAY' },
      { label: '单时', value: 'ODD_HOUR' },
      { label: '双时', value: 'EVEN_HOUR' },
    ],
    span: 24
  },
  {
    field: 'groupId', label: '广告组', type: 'modal-radio',
    options: {
      title: '选择广告组',
      API: '/api/cms/pub/ad/groups',
      label: 'name',//对应查出表中的id
      editLabel: 'groupName',//对应原有表中的字段

      fields: [
        { label: '名字', field: 'name' },

      ],
    },
    rules: ['required'],
  },

  {
    field: 'image', label: '广告图片', type: 'upload-image',
    options: {
      API: '/api/fs/uploadfile',
      max: 1,
      folderName:"ad"
    },
    span: 12
  },


  {
    field: 'targetUrl', label: '目标链接', type: 'modal-radio',
    options: {
      requireValid: true,
      title: '选择目标链接',
      API: '/api/cms/ad/definition',
      label: 'url',//对应查出表中的字段 显示
      editLabel: 'targetUrl',//对应原有表中的字段 要修改的字段
      value: 'url',    //传入数据库中的值 查出来表中的字段
      fields: [
        { label: '名字', field: 'name' },
        { label: '路径', field: 'url' },

      ],
    },
    rules: ['required'],
  },



];
