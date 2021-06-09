module.exports = [
  {
    label: '头像',
    type: 'upload-image',
    field: 'avatar'
  },
  {
    label: '用户',
    props: {
      placeholder: '请输入用户'
    },
    type: 'input',
    field: 'userName',
    width: '350px'
  },
  {
    label: '视频名称', field: 'videoName', type: 'input', width: '350px',
    props: {
      placeholder: '选择视频名称'
    },
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
    label: '视频名称', field: '', type: 'input', width: '350px',
    props: {
      placeholder: '请输入视频名称'
    },
  },
  {
    label: '运动处方', field: '', type: 'input', width: '350px',
    props: {
      placeholder: '请输入运动处方'
    }
  },
  {
    label: '评分', field: 'score', type: 'input', width: '350px',
    props: {
      placeholder: '请输入评分'
    }
  },
  {
    label: '动作指导师', field: 'coacherName', type: 'input', width: '350px',
    props: {
      placeholder: '请输入动作指导老师'
    }
  },
  { label: '时长', field: 'score', type: 'time_selection' },
  {
    label: '训练时间', field: 'trainingDate', type: 'date', width: '350px',
    props: {
      placeholder: '请选择训练时间'
    }
  },

];
