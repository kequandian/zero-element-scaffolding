module.exports = [
  { field: 'group_5', type: 'group', value: '视频基本信息', span: 24, },
  // { label: '视频', field: 'vidoSrc', type: 'plain' },
  {
    field: 'vidoSrc', label: '视频', width: 200,
    type: 'videoview',
    // options: {
    //   path: '/aiFitness/vido/vido-view'
    // },
  },
  { label: '视频名称', field: 'actionName', type: 'plain' },
  { label: '动作说明', field: 'trainingType', type: 'plain' },
  { label: '视频时长', field: 'vidoDuration', type: 'plain' },
  { label: '适用症状', field: 'prescriptionSymptoms', type: 'plain' },
  { field: 'items', type: 'Space', hight: 100 },
  { field: 'group_6', type: 'group', value: '关键动作', span: 24, },
  {
    label: '',
    field: 'items',
    type: 'one-mary',
    span: 24,
    options: {
      JSONString: true,
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
                      label: '时间位置', field: 'duration', type: 'input',
                      rules: ['required'],
                      props: {
                        placeholder: "请输入时间位置"
                      }
                    },
                    {
                      label: '动作帧', field: 'rawFrameImage', type: 'inputFetch',
                      rules: ['required'],
                      props: {
                        placeholder: "请输入动作帧"
                      },
                      config:{
                        API:'',
                        bindField:'poseModelImage'
                      }
                    },
                    // {
                    //   label: '动作帧',
                    //   options: {
                    //     type: 'text'
                    //   },
                    //   type: 'upload-image',
                    //   field: 'rawFrameImage'
                    // },
                    // {
                    //   label: '动作特征', field: 'poseModelImage', type: 'input',
                    //   rules: ['required'],
                    // },
                    {
                      label: '动作特征',
                      type: 'image',
                      field: 'poseModelImage'
                    },
                    
                    {
                      label: '动作名称', field: 'actionName', type: 'input',
                      rules: ['required'],
                      props: {
                        placeholder: "请输入动作名称"
                      }
                    },
                    {
                      label: '持续时长', field: 'reading', type: 'number',
                      rules: ['required'],
                      min:1,
                      props: {
                        placeholder: "请输入持续时长",
                        style: {
                          width: '240px',
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
        {
          field: 'rawFrameImage', label: '动作帧', width: 150,
          valueType: 'image',
          // options: {
          //   path: '/aiFitness/vido/keyPose-view'
          // },
        },
        {
          field: 'poseModelImage', label: '动作特征', width: 150,
          valueType: 'image',
          // options: {
          //   path: '/aiFitness/vido/keyPose-view'
          // },
        },
        // { label: '动作特征', field: 'poseModelImage' },
        { label: '动作名称', field: 'actionName' },
        { label: '时间位置', field: 'frameTimePosition' },
        { label: '持续时长', field: 'duration' },
        { label: '重复次数', field: 'repeatTimes' },
      ],
      operation: [
        {
          title: '编辑', type: 'path',
          options: {
            outside: true,
            path: '/aiFitness/vido/keyPose-edit',
          },
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
    rules: ['required'],
  }
];
