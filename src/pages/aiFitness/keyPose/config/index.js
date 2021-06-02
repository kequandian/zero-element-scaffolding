const {
  statusMap, colorMap, statusOpts,
} = require('./setting');

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
          { field: 'actionName', label: '动作名称', type: 'input' }
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
          {
            title: '添加动作', type: 'path',
            options: {
              path: '/aiFitness/keyPose/keyPose-add'
            },
          },
        ],

        fields: [
          {
            field: 'rawFrameImage', label: '动作帧', width: 150, sorter: false,
            valueType: 'image',
          },
          {
            field: 'poseModelImage', label: '动作特征', width: 150, sorter: false,
            valueType: 'image',
          },
          { label: '动作名称', field: 'actionName', width: 150, sorter: false },
          {
            label: '时间位置', field: 'frameTimePosition', width: 150, sorter: false,
            align: 'right'
          },
          {
            label: '持续时长', field: 'duration', width: 150, sorter: false,
            align: 'right'
          },
          { label: '重复次数', field: 'repeatTimes', width: 150, sorter: false,
          align: 'center' },

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
