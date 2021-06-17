const setting = require('./formItemTypeManage-setting.json');

module.exports = {
  layout: setting.layout.form,
  title: setting.pageName.new,
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
