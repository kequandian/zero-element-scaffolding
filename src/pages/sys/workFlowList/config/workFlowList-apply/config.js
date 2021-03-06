const setting = require('./setting-page.json');

module.exports = {
  layout: setting.layout.form,
  title: setting.pageName.edit,
  items: [
    {
      component: 'custom_form',
      config: {
        API: {
          getAPI: setting.getAPI,
          updateAPI: setting.updateAPI,
          getFieldsAPI: setting.getFieldsAPI,
        },
        layout: 'Grid',
        layoutConfig: {
          value: Array(setting.columns).fill(~~(24 / setting.columns)),
        },
        fields: setting.updateFields || setting.formFields,
        footerButton:false
      },
    },
  ],
};
