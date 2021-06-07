module.exports = [
  { field: 'group_5', type: 'group', value: '关键动作', span: 24, },
  //{ label: '关键动作帧', field: 'rawFrameImage', type: 'plain' },
  {
    field: 'rawFrameImage', label: '关键动作帧', width: 150,
    type: 'image',

  },
  //{ label: '动作预览', field: 'poseModelImage', type: 'plain' },
  {
    field: 'poseModelImage', label: '动作预览', width: 150,
    type: 'image',

  },
  { label: '动作名称', field: 'actionName', type: 'plain' },
  { label: '时间位置', field: 'frameTimePosition', type: 'secound_to_hms' },
  {
    label: '持续时间', field: 'duration', type: 'secound_to_hms'
  },
  {
    label: '重复次数', field: 'repeatTimes', type: 'plain'
  },


  { field: 'group_6', type: 'group', value: '动作模型', span: 24, },
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
                    createAPI: '/api/crud/keyPoseModel/keyPoseModels'
                  },
                  fields: [
                    {
                      label: '姿势单元1', field: 'poseFirst', type: 'input',
                      rules: ['required'],
                      props: {
                        placeholder: "请输入姿势单元1",
                      }
                    },
                    {
                      label: '姿势单元2', field: 'poseSecond', type: 'input',
                      rules: ['required'],
                      props: {
                        placeholder: "请输入姿势单元2",
                      }
                    },
                    {
                      label: '连接', field: 'poseType', type: 'input',
                      rules: ['required'],
                      props: {
                        placeholder: "请输入连接",
                      }
                    },
                    {
                      label: '阈值', field: 'threshold', type: 'number',
                      rules: ['required'],
                      min:1,
                      props: {
                        placeholder: "请输入阈值",
                      }
                    },
                    {
                      label: '角度值', field: 'angle', type: 'number',
                      rules: ['required'],
                      min:1,
                      props: {
                        placeholder: "请输入角度值",
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
        { label: '姿势单元1', field: 'poseFirst' },
        { label: '姿势单元2', field: 'poseSecond' },
        { label: '连接', field: 'poseType' },
        { label: '阈值', field: 'threshold' },
        { label: '角度值', field: 'angle' },
      ],
      operation: [
        {
          title: '编辑', type: 'path',
          options: {
            outside: true,
            path: '/vido/contract-edit',
          },
        },
        {
          title: '删除', type: 'delete',
        },
      ],
    },
    rules: ['required'],
  }
];
