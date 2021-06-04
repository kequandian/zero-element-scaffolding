module.exports = [
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
    label: '视频', field: '', type: 'input', width: '350px',
    props: {
      placeholder: '选择视频'
    },
  },
  {
    label: '视频名称', field: '', type: 'input', width: '350px',
    props: {
      placeholder: '请输入视频名称'
    },
  },
  { label: '时长', field: '', type: 'plain' },
  { label: '评分', field: '', type: 'input', width: '350px', },
  {
    label: '指导老师', field: '', type: 'input', width: '350px',
    props: {
      placeholder: '请输入动作指导老师'
    }
  },
  {
    label: '运动处方', field: '', type: 'input', width: '350px',
    props: {
      placeholder: '请输入运动处方'
    }
  },
  {
    label: '训练时间', field: 'trainingTime', type: 'date', width: '350px',
    props: {
      placeholder: '请选择训练时间'
    }
  },

];
