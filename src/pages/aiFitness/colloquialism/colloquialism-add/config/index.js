
const formFields = require('./formFields');

module.exports = {
  layout: 'BaseTitle',
  title: '新增话术',
  items: [
    {
      layout: 'Content',
      component: 'Form',
      config: {
        goBack: true,
        API: {
          //getAPI: '/api/crud/keyPoseModel/keyPoseModels/over/<id>',
          // updateAPI: '/api/crud/keyPoseModel/keyPoseModels/over/<id>',
          createAPI:'/api/crud/correctTerms/correctTermses'
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
