const { rightPoseConfig, leftPoseConfig } = require('./selectPoseConfig');

module.exports = [
  { field: 'group_5', type: 'group', value: '关键动作', span: 24, },
  {
    label: '关键动作帧',
    type: 'image',
    field: 'rawFrameImage',
    options: {
      width: 240,
      height: ''
    }
  },
  {
    label: '动作模型',
    type: 'image',
    field: 'poseModelImage',
    options: {
      width: 240,
      height: ''
    }
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
  // { label: '时间位置', field: 'frameTimePosition', type: 'secound_to_hms' },
  {
    label: '持续时长', field: 'duration', type: 'secound_to_hms',
    options: {
      format: '时分秒'
    }
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
                      options: rightPoseConfig
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
                      options: leftPoseConfig
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
                      props: {
                        placeholder: "请输入阈值",
                        style: {
                          width: 300
                        },
                        unit: '°',
                      }
                    },
                    {
                      label: '角度值', field: 'angle', type: 'input_num_and_unit',
                      rules: ['required'],
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
          width: '200px',
          options: {
            options: rightPoseConfig
          },
        },
        {
          label: '姿势单元2', field: 'poseSecond', valueType: 'input-select',
          width: '200px',
          options: {
            options: leftPoseConfig
          }
        },
        {
          label: '连接方式', field: 'poseType', valueType: 'input-select',
          width: '200px',
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
          width: '120px',
          props: {
            placeholder: "请输入阈值",
            style: {
              width: 120
            },
            unit: '°',
          }
        },
        {
          label: '角度值', field: 'angle', valueType: 'input_num_and_unit',
          width: '120px',
          props: {
            placeholder: "请输入角度值",
            style: {
              width: 120
            },
            unit: '°',
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
