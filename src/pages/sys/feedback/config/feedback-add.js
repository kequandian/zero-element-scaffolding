const setting = require('./feedback-setting.json');

module.exports = {
  layout: setting.layout.form,
  title: setting.pageName.new,
  items: [
    {
      component: 'Form',
      config: {
        API: {
          createAPI: setting.createAPI,
        },
        layout: 'Grid',
        layoutConfig: {
          value: Array(3).fill(~~(24 / 3)),
        },
        fields: setting.createFields || setting.formFields,
      },
    },
  ],
};
