const setting = require('./formItemTypeManage-setting.js');

module.exports = {
  layout: setting.layout.form,
  title: "",
  items: [
    {
      component: 'custom_form',
      config: {
        API: {
        },
        layout: 'Grid',
        layoutConfig: {
          value: Array(setting.columns).fill(~~(24 / setting.columns)),
        },
        fields: setting.createFields || setting.formFields,
        otherProps:{
          footerButton: false
        }
      },
    },
  ],
};
