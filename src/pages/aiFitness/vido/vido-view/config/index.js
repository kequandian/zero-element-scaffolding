
const formFields = require('./formFields');

module.exports = {
  layout: 'BaseTitle',
  title: '视频详细',
  items: [
    {
      layout: 'Content',
      component: 'print_config_form',
      config: {
        goBack: true,
        API: {
          getAPI: '/api/crud/coachingAction/coachingActions/<id>',
          updateAPI: '/api/crud/coachingAction/coachingActions/<id>',
          // deleteAPI: '/api/crud/keyPoseModel/keyPoseModels/over/<id>',
          // createAPI: '/api/crud/keyPoseModel/keyPoseModels/over',
        },
        layout: 'Grid',
        layoutConfig: {
          value: [24],
        },
        fields: formFields,
        otherProps:{
          renderResetBtn: false
        }
      },
    },
  ],
};
