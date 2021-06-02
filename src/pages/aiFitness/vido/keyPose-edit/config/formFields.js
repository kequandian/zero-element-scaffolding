module.exports = [
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
  {label: '时间位置', field: 'frameTimePosition', type: 'input'},
  {label: '持续时间', field: 'duration', type: 'number'},
  {label: '重复次数', field: 'repeatTimes', type: 'number'},
  // {
  //   label: '归属父类', field: 'coachingActionId', type: 'modal-radio', options: {
  //     title: '父级',
  //     value: 'id',
  //     API: '/api/crud/coachingAction/coachingActions',
  //     fields: [
  //       {
  //         label: '选择父级',
  //         field: 'actionName'
  //       }
  //     ]
  //   }
  // },
];
