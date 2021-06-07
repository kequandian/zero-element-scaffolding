module.exports = {
  layout: 'Content',
  title: '用户视频管理',
  items: [
    {
      layout: 'Empty',
      component: 'Search',
      config: {
        share: 'userVido',
        fields: [
          {field: 'userName', label: '用户', type: 'input'}
        ],
      },
    },

    {
      layout: 'Empty',
      component: 'Table',
      config: {
        share: 'userVido',
        API: {
          listAPI: '/api/crud/userTraningRecord/userTraningRecords',
          deleteAPI: '/api/crud/userTraningRecord/userTraningRecords/<id>',
        },
        // actions: [
        //   {
        //     title: '新建', type: 'path',
        //     options: {
        //       path: '/aiFitness/userVido/userVido-add'
        //     },
        //   },
        // ],

        fields: [

          {label: '用户', field: 'userName', width: 150, sorter: false},
          {label: '视频', field: '', sorter: false},
          {label: '视频名称', field: '', sorter: false},
          {label: '评分', field: '', sorter: false},
          {label: '动作指导老师', field: '', sorter: false},
          {label: '运动处方', field: '',sorter: false},
          {label: '训练时间', field: 'trainingTime', valueType: 'secound_to_hms'},
          {label: '时长', field: 'score', valueType: 'secound_to_hms'},

        ],
        operation: [

          {
            title: '详情', type: 'path',
            options: {
              outside: true,
              path: '/aiFitness/userVido/userVido-view'
            },
          },
          {
            title: '编辑', type: 'path',
            options: {
              outside: false,
              path: '/aiFitness/userVido/userVido-edit',
            },
          },
          {
            title: '删除', type: 'delete',
          },
        ],
      },
    },
  ],
};
