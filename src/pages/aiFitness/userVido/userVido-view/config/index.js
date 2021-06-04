
const formFields = require('./formFields');

module.exports = {
  layout: 'BaseTitle',
  title: '纠正模型详细',
  items: [
    {
      layout: 'Content',
      component: 'print_config_form',
      config: {
        goBack: true,
        API: {
          getAPI: '/api/crud/correctTerms/correctTermses/<id>',
          updateAPI: '/api/crud/correctTerms/correctTermses/<id>',
          // deleteAPI: '/api/crud/keyPoseModel/keyPoseModels/over/<id>',
        },
        layout: 'Grid',
        layoutConfig: {
          value: [24],
        },
        fields: formFields,
        otherProps:{
          footerButton: false
        }
      },
    },
  ],
};
