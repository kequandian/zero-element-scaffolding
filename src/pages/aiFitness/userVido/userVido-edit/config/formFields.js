module.exports = [
  {
    label: '头像',
    type: 'upload-image',
    field: 'avator',
    options: {
      // API: '/api/fs/uploadfile',
      type: 'text',
      max: 1,
    },
  },
  {
    label: '用户',
    type: 'plain',
    field: 'userName',
  },
  {
    label: "视频",
    rules: [],
    field: "videoSrc",
    type: "upload_file_single",
    options: {
      title: "点击上传",
      API: "/api/fs/uploadfile",
      acceptType: ".mp4"
    }
  },
  {
    label: '视频名称', field: 'videoName', type: 'plain'
  },
  // {
  //   label: '运动处方', field: '', type: 'input', width: '350px',
  //   props: {
  //     placeholder: '请输入运动处方'
  //   }
  // },
  {
    label: '评分', field: 'score', type: 'number',
    props: {
      style:{
        width: '350px'
      },
      placeholder: '请输入评分'
    }
  },
  {
    label: '动作指导师', field: 'coacherName', type: 'input', width: '350px',
    props: {
      placeholder: '请输入动作指导老师'
    }
  },
  {
    label: '时长', field: 'trainingTime', type: 'input_num_and_unit',
    // rules: ['required'],
    props: {
      min: 1,
      placeholder: "请输入时长",
      style: {
        width: 350
      },
      unit: '秒',
    }
  },
  {
    label: '训练时间', field: 'trainingDate', type: 'date',
    props: {
      placeholder: '请选择训练时间',
      style: {
        width: '350px'
      }
    },
    options:{
      format: 'YYYY-MM-DD HH:mm:ss'
    }
  },

];
