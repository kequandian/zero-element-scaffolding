module.exports = [
  {
    field: 'account', label: '登录账号', type: 'input', rules: ['required']
  },

  // added in 2024-1-17 将“选择组织”功能替换为“选择部门”
  {
    "label": "选择部门",
    "field": "orgId",
    "type": "modal-radio",
    "props": {},
    "rules": [
      "required"
    ],
    "options": {
      "title": "选择部门",
      "value": "id",       //最终传入的数据
      "API": "/api/sys/org",
      "label": "name",       //编辑的时候返显
      pagination: true,
      "fields": [
        {
          "label": "部门",
          "field": "name"
        }
      ]
    }
  },
  // added in 2024-1-17 增加是否是部门经理按钮
  {
    field: 'isDepartmentManger', label: '是否为部门经理', type: 'radio', rules: ['required'], options: [
      { label: '是', value: 1 },
      { label: '否', value: 0 },
    ]
  },

  {
    field: 'roleIds', label: '角色', type: 'modal-checkbox',
    options: {
      API: '/api/adm/roles',
      title: '选择角色',
      fields: [
        { label: '名称', field: 'name' },
        { label: '备注', field: 'tips' },
      ]
    },
    rules: ['required'],
  },
  {
    field: 'name', label: '用户名', type: 'input', rules: ['required']
  },
  {
    field: 'password', label: '密码', type: 'input', span: 12,
    rules: ['required'],
  },
  {
    field: 'phone', label: '电话', type: 'input'
  },
  {
    field: 'email', label: '邮箱', type: 'input',
    // rules: ['required'],

  },
  {
    field: 'avatar', label: '头像', type: 'avatars',
    options: {
      API: '/api/fs/uploadfile',
      max: 1
    },
  },

  /*  {
      field: 'phone', label: '电话', type: 'input',
      span: 12
    },*/
  {
    field: 'sex', label: '性别', type: 'radio',
    options: [
      { label: '男', value: '0' },
      { label: '女', value: '1' }
    ],

  },
  {
    field: 'birthday', label: '出生年月', type: 'date',
    options: {
      nowTime: false,
      format: 'YYYY-MM-DD'
    },
    span: 24
  },
  {
    field: 'account', label: '', type: 'hidden', value: '',
  },
]
