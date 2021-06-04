const addKeyPoseField = require('../vido-add/config/formFields');
const editKeyPoseField = require('../vido-edit/config/formFields');

module.exports = {
  layout: 'Content',
  title: '视频管理',
  items: [
    {
      layout: 'Empty',
      component: 'Search',
      config: {
        share: 'vido',
        fields: [
          {field: 'actionName', label: '视频名称', type: 'input'}
        ],
      },
    },

    {
      layout: 'Empty',
      component: 'Table',
      config: {
        share: 'vido',
        API: {
          listAPI: '/api/crud/coachingAction/coachingActions',
          deleteAPI: '/api/crud/coachingAction/coachingActions/(id)',
        },
        actions: [
          // {
          //   title: '添加视频', type: 'path',
          //   options: {
          //     path: '/aiFitness/vido/vido-add'
          //   },
          // },
          {
            title: '添加视频', type: 'modal',
            options: {
              modalTitle: '添加视频',
              modalWidth: 600,
              items: [
                {
                  component: 'Form',
                  config: {
                    layout: 'Grid',
                    API: {
                      createAPI: '/api/crud/coachingAction/coachingActions'
                    },
                    fields: addKeyPoseField,
                  }
                }
              ]
            }
          }
        ],
        fields: [
          {
            field: 'vido_thumb', label: '视频', width: 150, sorter: false,
            valueType: 'thumb',
            // options: {
            //   path: '/aiFitness/vido/vido-view'
            // },
          },
          {field: 'actionName', label: '视频名称', width: 200, sorter: false},
          {field: 'vidoDuration', label: '视频长度', width: 120, sorter: false},
          {field: 'trainingType', label: '动作说明', width: 230, sorter: false},
          {field: 'prescriptionSymptoms', label: '适用症状', sorter: false},
          {field: 'Star', label: '社群', width: 120, valueType: 'ellipsis', sorter: false},
          {
            label: '更新时间',
            valueType: 'time-convert',
            field: 'updateDate'
          },

        ],
        operation: [
          {
            title: '详情', type: 'path',
            options: {
              outside: true,
              path: '/aiFitness/vido/vido-view'
            },
          },

          // {
          //   title: '编辑', type: 'path',
          //   options: {
          //     outside: true,
          //     path: '/aiFitness/vido/vido-edit',
          //   },
          // },
          {
            title: '编辑', type: 'modal',
            options: {
              outside: false,
              modalTitle: '编辑视频',
              modalWidth: 600,
              items: [
                {
                  component: 'Form',
                  config: {
                    layout: 'Grid',
                    API: {
                      getAPI: '/api/crud/coachingAction/coachingActions/(id)',
                      updateAPI: '/api/crud/coachingAction/coachingActions/(id)',
                    },
                    fields: editKeyPoseField,
                  }
                }
              ]
            }
          },
          {
            title: '删除', type: 'delete',
          },
        ],
      },
    },
  ],
};
