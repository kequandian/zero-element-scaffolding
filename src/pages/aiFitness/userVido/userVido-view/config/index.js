
const formFields = require('./formFields');

module.exports = {
  layout: 'BaseTitle',
  title: '详情',
  items: [
    {
      layout: 'Content',
      component: 'print_config_form',
      config: {
        goBack: true,
        API: {
          getAPI: '/api/crud/userTraningRecord/userTraningRecords/<id>',
          // updateAPI: '/api/crud/correctTerms/correctTermses/<id>',
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
