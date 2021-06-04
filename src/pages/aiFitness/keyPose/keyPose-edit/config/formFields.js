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
    field: 'repeatTimes',
    width: '350px'
  },
  {
    label: '处方症状',
    rules: [
      {
        type: 'required'
      }
    ],
    props: {
      placeholder: '请输入处方症状'
    },
    type: 'input',
    field: 'repeatTimes',
    width: '350px'
  },
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
    width: '350px',
    type: 'plain',
    field: 'frameTimePosition'
  },
  {
    label: '持续时间', field: 'duration', type: 'number', 
    min:1,
    props: {
      style: {
        width: '100px',
      }
    }
  },
  {
    label: '重复次数', field: 'repeatTimes', type: 'number',
    props: {
      style: {
        width: '100px',
      }
    }
  },
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

  {
    label: '动作说明',
    rules: [],
    props: {
      placeholder: '请输入动作说明',
      style: {
        width: '350px',
      },
      autoSize: {
        minRows: 5,
      }
    },
    type: 'text-area',
    field: 'repeatTimes'
  },
];
