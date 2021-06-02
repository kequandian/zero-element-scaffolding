module.exports = [
  // {
  //   label: '上传视频',
  //   rules: [
  //     {
  //       type: 'required'
  //     }
  //   ],
  //   options: {
  //     type: 'text'
  //   },
  //   type: 'upload-file',
  //   field: 'vidoSrc'
  // },
  {
    label: "上传视频",
    rules: [
      {
        type: "required"
      }
    ],
    field: "vidoSrc",
    type: "upload_file_single",
    options: {
      title: "点击上传",
      API: "/api/fs/uploadfile",
      acceptType: ".mp4, .avi, .rmvb"
    }
  },
  {
    label: '视频名称',
    rules: [
      {
        type: 'required'
      }
    ],
    props: {
      placeholder: '请输入视频名称'
    },
    type: 'input',
    field: 'actionName'
  },
  {
    label: '动作说明',
    rules: [
      {
        type: 'required'
      }
    ],
    props: {
      placeholder: '请输入动作说明'
    },
    type: 'text-area',
    field: 'trainingType'
  },
  {
    label: '适用症状',
    rules: [
      {
        type: 'required'
      }
    ],
    props: {
      placeholder: '请输入适用症状'
    },
    type: 'input',
    field: 'prescriptionSymptoms'
  },

  {
    label: '更新时间',
    width: 180,
    rules: [
      {
        type: 'required'
      }
    ],
    type: 'date',
    field: 'updateDate'
  },

];
