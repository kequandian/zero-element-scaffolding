module.exports = [
  { field: 'group_1', type: 'group', value: '参与信息', span: 24, },
  {
    label: '', field: 'attendInfo', type: 'plain_tag',
    options: {
      format: [
        {field: '<personTimes>', text: '人参与', color: '#2A82E4'},
        {field: '<star>', text: '点赞', color: '#00BAAD'},
      ]
    }
  },
  { field: 'group_5', type: 'group', value: '视频基本信息', span: 24, },
  {
    field: 'vidoSrc', label: '视频', width: 200,
    type: 'videoview',
    // options: {
    //   path: '/aiFitness/vido/vido-view'
    // },
  },
  { label: '视频名称', field: 'actionName', type: 'plain' },
  { label: '动作说明', field: 'trainingType', type: 'plain' },
  { label: '视频时长', field: 'vidoDuration', type: 'secound_to_hms' },
  { label: '适用症状', field: 'prescriptionSymptoms', type: 'plain' },
  { field: 'items', type: 'Space', hight: 100 },
  { field: 'group_6', type: 'group', value: '关键动作', span: 24, },
  {
    label: '',
    field: 'items',
    type: 'one-mary',
    span: 24,
    options: {
      JSONString: false,
      actions: [
        {
          title: '添加', type: 'children-modal-add', options: {
            modalTitle: '添加关键动作',
            modalWidth: 680,
            items: [
              {
                layout: 'Empty',
                component: 'ChildrenForm',
                config: {
                  layout: 'Grid',
                  layoutConfig: {
                    value: [24],
                  },
                  API: {
                    // getAPI: '/api/crud/keyPoseModel/keyPoseModels/(id)'
                  },
                  fields: [
                    {
                      label: '时间位置', field: 'frameTimePosition', type: 'time_selection',
                      rules: ['required'],
                    },
                    // {`
                    //   label: '动作帧', field: 'rawFrameImage', type: 'inputFetch',
                    //   rules: ['required'],
                    //   props: {
                    //     placeholder: "请输入动作帧"
                    //   },
                    //   config:{
                    //     API:'',
                    //     bindField:'poseModelImage'
                    //   }
                    // },
                    // {
                    //   label: '动作特征',
                    //   type: 'image',
                    //   field: 'poseModelImage'
                    // },

                    {
                      label: '动作名称', field: 'action', type: 'input', width: '350px',
                      rules: ['required'],
                      props: {
                        placeholder: "请输入动作名称"
                      }
                    },
                    {
                      label: '持续时长', field: 'duration', type: 'time_selection',
                      rules: ['required'],
                    },
                    {
                      label: '重复次数', field: 'repeatTimes', type: 'number',
                      rules: ['required'],
                      min: 1,
                      props: {
                        placeholder: "请输入",
                        style: {
                          width: '350px',
                        }
                      }
                    },
                  ],
                },
              }
            ],
          }
        },
      ],
      fields: [
        // {
        //   field: 'rawFrameImage', label: '动作帧', width: 150,
        //   valueType: 'image',
        //   // options: {
        //   //   path: '/aiFitness/vido/keyPose-view'
        //   // },
        // },
        // {
        //   field: 'poseModelImage', label: '动作特征', width: 150,
        //   valueType: 'image',
        //   // options: {
        //   //   path: '/aiFitness/vido/keyPose-view'
        //   // },
        // },
        // { label: '动作特征', field: 'poseModelImage' },
        {
          label: '时间位置', field: 'frameTimePosition', valueType: 'time_selection_and_disaible', width: '150px'
        },
        { label: '动作名称', field: 'action', valueType: 'input-text', width: '300px' },
        { label: '持续时长', field: 'duration', valueType: 'time_selection', width: '150px' },
        {
          label: '重复次数', field: 'repeatTimes', valueType: 'input-number', width: '150px'
        },
      ],
      operation: [
        {
          title: '详情', type: 'path',
          options: {
            outside: true,
            path: '/aiFitness/vido/keyPose-edit',
          },
          expect: {
            field: "hasData",
            value: "/(true)/"
          }
        },
        // {
        //   title: '删除',
        //   type: 'request',
        //   options: {
        //     outside: true,
        //     tips: '确定要删除吗?',
        //     API: '/api/crud/keyPoseModel/keyPoseModels/over/(id)',
        //     method: 'delete'
        //   }
        // },
        {
          title: '移除', type: 'removeChild',
          options: {
            outside: true,
          }
        },
      ],
    },
  }
];
