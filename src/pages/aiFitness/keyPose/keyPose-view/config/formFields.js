module.exports = [
  { field: 'group_5', type: 'group', value: '关键动作', span: 24, },
  {
    label: '关键动作帧',
    type: 'image',
    field: 'rawFrameImage'
  },
  {
    label: '动作模型预览',
    type: 'image',
    field: 'poseModelImage'
  },
  {
    label: '动作名称',
    type: 'plain',
    field: 'action'
  },
  {
    label: '体姿基准',
    type: 'plain',
    field: 'gesture',
  },
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
            modalTitle: '添加动作模型',
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
                      label: '姿势单元1', field: 'poseFirst', type: 'select',
                      rules: ['required'],
                      props: {
                        placeholder: "请选择姿势单元1",
                        style: {
                          width: 300
                        }
                      },
                      options: [
                        { label: '右手腕', value: 'Right wrist' },
                        { label: '右眼', value: 'Right eyes' },
                        { label: '右肘', value: 'Right elbow' },
                        { label: '右耳', value: 'Right ear' },
                        { label: '右肩', value: 'Right shoulder' },
                        { label: '右臂', value: 'Right hip' },
                        { label: '右膝', value: 'Right knee' },
                        { label: '右脚踝', value: 'Right ankie' },
                        { label: '脖子', value: 'Neck' },
                        { label: '鼻子', value: 'Nose' },
                      ]
                    },
                    {
                      label: '姿势单元2', field: 'poseSecond', type: 'select',
                      rules: ['required'],
                      props: {
                        placeholder: "请选择姿势单元2",
                        style: {
                          width: 300
                        }
                      },
                      options: [
                        { label: '左手腕', value: 'Left wrist' },
                        { label: '左眼', value: 'Left eyes' },
                        { label: '左肘', value: 'Left elbow' },
                        { label: '左耳', value: 'Left ear' },
                        { label: '左肩', value: 'Left shoulder' },
                        { label: '左臂', value: 'Left hip' },
                        { label: '左膝', value: 'Left knee' },
                        { label: '左脚踝', value: 'Left ankie' },
                        { label: '脖子', value: 'Neck' },
                        { label: '鼻子', value: 'Nose' },
                      ]
                    },
                    {
                      label: '连接方式', field: 'poseType', type: 'select',
                      rules: ['required'],
                      props: {
                        placeholder: "请选择连接方式",
                        style: {
                          width: 300
                        }
                      },
                      options: [
                        { label: '水平伸展', value: 'horizontal extension' },
                        { label: '立正', value: 'attention' },
                        { label: '前向伸展', value: 'Forward extension' },
                        { label: '侧躺卧', value: 'Lie on your side' },
                        { label: '仰卧', value: 'lie supine' },
                        { label: '俯卧', value: 'prostrate' },
                      ]
                    },
                    {
                      label: '阈值', field: 'threshold', type: 'input_num_and_unit',
                      rules: ['required'],
                      bindfield: 'angle',
                      props: {
                        placeholder: "请输入阈值",
                        style: {
                          width: 300
                        }
                      }
                    },
                    {
                      label: '角度值', field: 'angle', type: 'input_num_and_unit',
                      rules: ['required'],
                      bindfield: 'threshold',
                      props: {
                        placeholder: "请输入角度值",
                        style: {
                          width: 300
                        },
                        unit: '°',
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
          label: '姿势单元1', field: 'poseFirst', valueType: 'input-select',
          options: {
            options: [
              { label: '右手腕', value: 'Right wrist' },
              { label: '右眼', value: 'Right eyes' },
              { label: '右肘', value: 'Right elbow' },
              { label: '右耳', value: 'Right ear' },
              { label: '右肩', value: 'Right shoulder' },
              { label: '右臂', value: 'Right hip' },
              { label: '右膝', value: 'Right knee' },
              { label: '右脚踝', value: 'Right ankie' },
              { label: '脖子', value: 'Neck' },
              { label: '鼻子', value: 'Nose' },
            ]
          },
        },
        {
          label: '姿势单元2', field: 'poseSecond', valueType: 'input-select',
          options: {
            options: [
              { label: '左手腕', value: 'Left wrist' },
              { label: '左眼', value: 'Left eyes' },
              { label: '左肘', value: 'Left elbow' },
              { label: '左耳', value: 'Left ear' },
              { label: '左肩', value: 'Left shoulder' },
              { label: '左臂', value: 'Left hip' },
              { label: '左膝', value: 'Left knee' },
              { label: '左脚踝', value: 'Left ankie' },
              { label: '脖子', value: 'Neck' },
              { label: '鼻子', value: 'Nose' },
            ]
          }
        },
        {
          label: '连接方式', field: 'poseType', valueType: 'input-select',
          options: {
            options: [
              { label: '水平伸展', value: 'horizontal extension' },
              { label: '立正', value: 'attention' },
              { label: '前向伸展', value: 'Forward extension' },
              { label: '侧躺卧', value: 'Lie on your side' },
              { label: '仰卧', value: 'lie supine' },
              { label: '俯卧', value: 'prostrate' },
            ]
          }
        },
        {
          label: '阈值', field: 'threshold', valueType: 'input_num_and_unit',
          bindfield: 'angle',
          props: {
            placeholder: "请输入阈值",
            style: {
              width: 120
            }
          }
        },
        {
          label: '角度值', field: 'angle', valueType: 'input_num_and_unit',
          bindfield: 'threshold',
          props: {
            placeholder: "请输入角度值",
            unit: '°',
            style: {
              width: 120
            },
          }
        },
      ],
      operation: [
        // {
        //   title: '编辑', type: 'path',
        //   options: {
        //     outside: true,
        //     path: '/vido/contract-edit',
        //   },
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
