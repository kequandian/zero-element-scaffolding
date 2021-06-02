
const {
  statusMap, colorMap,
} = require('./setting');
const formFields = require('./formFields');

module.exports = {
  layout: 'BaseTitle',
  title: '纠正模型详细',
  items: [
    {
      layout: 'Content',
      component: 'Form',
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
      },
    },
  ],
};
