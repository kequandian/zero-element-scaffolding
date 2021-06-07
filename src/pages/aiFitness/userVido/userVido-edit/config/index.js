const formFields = require('./formFields');

module.exports = {
  layout: 'BaseTitle',
  title: '编辑',
  items: [
    {
      layout: 'Content',
      component: 'Form',
      config: {
        goBack: true,
        API: {
          getAPI: '/api/crud/userTraningRecord/userTraningRecords/<id>',
          updateAPI: '/api/crud/userTraningRecord/userTraningRecords/<id>',
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
