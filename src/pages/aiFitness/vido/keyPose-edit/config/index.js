
const formFields = require('./formFields');

module.exports = {
  layout: 'BaseTitle',
  title: '关键动作',
  items: [
    {
      layout: 'Content',
      component: 'print_config_form',
      config: {
        goBack: true,
        API: {
          getAPI: '/api/crud/keyPoseModel/keyPoseModels/over/<id>',
          updateAPI: '/api/crud/keyPoseModel/keyPoseModels/over/<id>',
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
