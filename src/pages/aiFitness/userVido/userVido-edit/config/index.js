const formFields = require('./formFields');

module.exports = {
  layout: 'BaseTitle',
  title: '编辑话术模型',
  items: [
    {
      layout: 'Content',
      component: 'Form',
      config: {
        goBack: true,
        API: {
          getAPI: '/api/crud/correctTerms/correctTermses/<id>',
          updateAPI: '/api/crud/correctTerms/correctTermses/<id>',
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
