module.exports = [
  {
    label: '动作名称',
    rules: [ 'required'],
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
    type: 'image',
    field: 'rawFrameImage',
    options: {
      width: 240,
      height: '',
    },
  },
  {
    label: '动作特征',
    type: 'image',
    field: 'poseModelImage',
    options: {
      width: 240,
      height: '',
    },
    
  },
  {
    label: '时间位置',
    rules: [ 'required'],
    type: 'time_selection_and_disaible',
    field: 'frameTimePosition',
    width: '240px'
  },
  {
    label: '持续时长', field: 'duration', type: 'time_selection',
    rules: ['required'],
    width: '240px'
  },
  {
    label: '重复次数', field: 'repeatTimes', type: 'number',
    rules: ['required'],
    props: {
      min: 1,
      placeholder: "请输入重复次数",
      style:{
        width: '240px'
      }
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
