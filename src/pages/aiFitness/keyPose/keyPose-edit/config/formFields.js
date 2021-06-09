module.exports = [
  {
    label: '动作名称',
    rules: [
      {
        type: 'required'
      }
    ],
    props: {
      placeholder: '请输入动作名称'
    },
    type: 'input',
    field: 'action',
    width: '240px'
  },
  // {
  //   label: '处方症状',
  //   rules: [
  //     {
  //       type: 'required'
  //     }
  //   ],
  //   props: {
  //     placeholder: '请输入处方症状'
  //   },
  //   type: 'input',
  //   field: 'repeatTimes',
  //   width: '240px'
  // },
  {
    label: '动作帧',
    options: {
      type: 'text'
    },
    type: 'upload-image',
    field: 'rawFrameImage'
  },
  {
    label: '动作特征',
    options: {
      type: 'text'
    },
    type: 'upload-image',
    field: 'poseModelImage'
  },
  {
    label: '时间位置',
    rules: [
      {
        type: 'required'
      }
    ],
    type: 'time_selection',
    field: 'frameTimePosition'
  },
  {
    label: '持续时间', field: 'duration', type: 'time_selection', 
    rules: [
      {
        type: 'required'
      }
    ],
  },
  {
    label: '重复次数', field: 'repeatTimes', type: 'number',
    rules: ['required'],
    props: {
      placeholder: "请输入",

    }
  },
  // {
  //   label: '动作说明',
  //   rules: [],
  //   props: {
  //     placeholder: '请输入动作说明',
  //     maxLength:"200",
  //     showCount:true,
  //     style:{
  //       width: '240px',
  //     },
  //     autoSize: {
  //       minRows: 5,
  //     }
  //   },
  //   type: 'text-area',
  //   field: 'trainingType'
  // },
];
