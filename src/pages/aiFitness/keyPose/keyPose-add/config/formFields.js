module.exports = [
  // {
  //   label: '上传动作帧',
  //   rules: [
  //     {
  //       type: 'required'
  //     }
  //   ],
  //   options: {
  //     type: 'text'
  //   },
  //   type: 'upload-image',
  //   field: 'vidoSrc'
  // },
  {
    label: "上传动作帧",
    rules: [
      {
        type: "required"
      }
    ],
    field: "videoSrc",
    type: "upload_file_single",
    options: {
      title: "点击上传",
      API: "/api/fs/uploadfile",
      acceptType: ".mp4"
    }
  },
  // {
  //   label: '上传动作特征',
  //   rules: [
  //     {
  //       type: 'required'
  //     }
  //   ],
  //   options: {
  //     type: 'text'
  //   },
  //   type: 'upload-image',
  //   field: 'vidoSrc'
  // },
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
    width: '240px'
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
    width: '240px'
  },
  {
    label: '动作说明',
    rules: [],
    props: {
      placeholder: '请输入动作说明',
      maxLength:"200",
      showCount:true,
      style:{
        width: '450px',
      },
      autoSize: {
        minRows: 5,
      }
    },
    type: 'text-area',
    field: 'trainingType'
  },
  // {
  //   label: '更新时间',
  //   width: 180,
  //   rules: [
  //     {
  //       type: 'required'
  //     }
  //   ],
  //   type: 'date',
  //   field: 'frameTimePosition'
  // },
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
