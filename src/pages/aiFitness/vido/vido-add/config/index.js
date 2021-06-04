
const formFields = require('./formFields');

module.exports = {
  layout: 'BaseTitle',
  title: '新增视频',
  items: [
    {
      layout: 'Content',
      component: 'Form',
      config: {
        goBack: true,
        API: {
          //getAPI: '/api/crud/keyPoseModel/keyPoseModels/over/<id>',
          // updateAPI: '/api/crud/keyPoseModel/keyPoseModels/over/<id>',
          createAPI:'/api/crud/coachingAction/coachingActions'
        },
        layout: 'Grid',
        layoutConfig: {
          value: [24],
        },
        fields: formFields,
      },
    },
  ],
};
