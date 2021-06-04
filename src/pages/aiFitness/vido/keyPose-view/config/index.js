
const formFields = require('./formFields');

module.exports = {
  layout: 'BaseTitle',
  title: '关键动作详细',
  items: [
    {
      layout: 'Content',
      component: 'Form',
      config: {
        goBack: true,
        API: {
          getAPI: '/api/crud/keyPoseModel/keyPoseModels/over/<id>',
          updateAPI: '/api/contract/contracts/<id>',
          // deleteAPI: '/api/crud/keyPoseModel/keyPoseModels/over/<id>',
        },
        layout: 'Grid',
        layoutConfig: {
          value: [8, 8, 8],
        },
        fields: formFields,
      },
    },
  ],
};
