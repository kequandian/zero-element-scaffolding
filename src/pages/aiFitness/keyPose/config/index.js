module.exports = {
  layout: 'Content',
  title: '标准动作',
  items: [
    {
      layout: 'Empty',
      component: 'Search',
      config: {
        share: 'keyPose',
        fields: [
          { field: 'action', label: '动作名称', type: 'input' }
        ],
      },
    },

    {
      layout: 'Empty',
      component: 'Table',
      config: {
        share: 'keyPose',
        API: {
          listAPI: '/api/crud/keyPoseModel/keyPoseModels/over',
          deleteAPI: '/api/crud/keyPoseModel/keyPoseModels/over/(id)',
        },
        actions: [
          // {
          //   title: '添加动作', type: 'path',
          //   options: {
          //     path: '/aiFitness/keyPose/keyPose-add'
          //   },
          // },
        ],

        fields: [
          {
            field: 'rawFrameImage', label: '动作帧',
            width: '180px',
            valueType: 'image',
            options: {
              width: 120,
              height: ''
            }
          },
          {
            field: 'poseModelImage', label: '动作特征',
            width: '180px',
            valueType: 'image',
            options: {
              width: 120,
              height: ''
            }
          },
          {
            label: '动作名称', field: 'action',
            width: '200px',
          },
          {
            label: '时间位置', field: 'frameTimePosition', valueType: 'secound_to_hms',
            width: '180px',
          },
          {
            label: '持续时长', field: 'duration', valueType: 'secound_to_hms',
            options: {
              format: '时分秒'
            }
          },
          {
            label: '重复次数', field: 'repeatTimes', sorter: false,
            align: 'center',
            width: '180px',
          },

        ],
        operation: [

          {
            title: '详情', type: 'path',
            options: {
              outside: true,
              path: '/aiFitness/keyPose/keyPose-view'
            },
          },

          {
            title: '编辑', type: 'path',
            options: {
              outside: true,
              path: '/aiFitness/keyPose/keyPose-edit',
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
