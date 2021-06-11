module.exports = [
  { label: '视频', field: 'videoSrc', type: 'plain' },
  { label: '视频名称', field: 'videoName', type: 'plain' },
  {
    label: '头像', field: 'avator', type: 'image',
    options: {
      width: '120px',
      heidht: ''
    }
  },
  { label: '用户', field: 'userName', type: 'plain' },
  // { label: '运动处方', field: '', type:'plain' },
  { label: '评分', field: 'score', type: 'plain' },
  { label: '动作指导师', field: 'coacherName', type: 'plain' },
  {
    label: '时长', field: '_trainingTime', type: 'plain', 
    options: {
      format: '<trainingTime> 秒',
    }
  },
  { label: '训练时间', field: 'trainingDate', type: 'plain' },

];
