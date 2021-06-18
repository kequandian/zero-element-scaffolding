module.exports = {
  layout: 'Content',
  title: '用户视频管理',
  items: [
    {
      layout: 'Empty',
      component: 'Search',
      config: {
        type:"default", //更换按钮样式
        share: 'userVido',
        fields: [
          {field: 'userName', placeholder: '用户', type: 'search'}//search 完善样式
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
          {label: '视频', field: 'videoSrc', valueType: 'video',width: '150px'},
          {
            label: '用户',
            options: {
              fields: [
                {
                  field: 'avator',
                  type: 'image',
                  options: {
                    width: 100,
                    height: ''
                  }
                },
                {
                  field: 'userName',
                  type: 'plain',
                  options: {
                    style: {
                      fontWeight: 900
                    }
                  }
                }
              ]
            },
            field: 'names',
            align: 'center',
            valueType: 'complex'
          },
          {label: '视频名称', field: 'videoName'},
          {label: '运动处方', field: ''},
          {label: '评分', field: 'score'},
          {label: '动作指导师', field: 'coacherName'},
          {
            label: '时长', field: 'trainingTime', valueType: 'secound_to_hms',
            options: {
              format: '时分秒'
            }
          },
          {label: '训练时间', field: 'trainingDate', valueType: 'time-convert'},

        ],
        operation: [
          {
            title: '详情', type: 'path',
            options: {
              outside: true,
              path: '/aiFitness/userVido/userVido-view'
            },
          },
          // {
          //   title: '编辑', type: 'path',
          //   options: {
          //     outside: false,
          //     path: '/aiFitness/userVido/userVido-edit',
          //   },
          // },
          {
            title: '删除', type: 'delete',
          },
        ],
      },
    },
  ],
};