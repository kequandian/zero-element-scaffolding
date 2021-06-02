module.exports = [
  // {
  //   label: '上传视频',
  //   options: {
  //     type: 'text'
  //   },
  //   type: 'upload-image',
  //   field: 'vidoSrc'
  // },
  // {
  //   label: '动作名称', field: 'frameTimePosition', type: 'input', "rules": [
  //     {
  //       "type": "required"
  //     }
  //   ]
  // },
  // {
  //   label: '视频时长', field: 'duration', type: 'input', "rules": [
  //     {
  //       "type": "required"
  //     }
  //   ]
  // },
  // {
  //   label: '训练类型', field: 'repeatTimes', type: 'input', "rules": [
  //     {
  //       "type": "required"
  //     }
  //   ]
  // },
  // {
  //   label: '处方症状', field: 'repeatTimes', type: 'input', "rules": [
  //     {
  //       "type": "required"
  //     }
  //   ]
  // },
  //{label: '更新时间', field: 'repeatTimes', type: 'input'},
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


  {
    label: '纠正ID', field: 'correctionModel', type: 'input', rules: [
      {
        "type": "required"
      }
    ],
    width: '350px'
  },
  {
    label: '纠正说明', field: 'modelEnglishName', type: 'input', rules: [
      {
        "type": "required"
      }
    ],
    width: '350px'
  },
  {
    label: '话术描述', field: 'collectionTerm', type: 'text-area', rules: [
      {
        "type": "required"
      }
    ],
    props:{
      style:{
        width: '350px'
      },
      autoSize: {
          minRows: 3,
      }
    }
  }




];
