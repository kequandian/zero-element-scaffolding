const setting = require('./relationalModel-setting.json');

module.exports = {
  layout: setting.layout.form,
  title: setting.pageName.edit,
  items: [
    // {
    //   component: 'Form',
    //   config: {
    //     API: {
    //       getAPI: setting.getAPI,
    //       updateAPI: setting.updateAPI,
    //     },
    //     layout: 'Grid',
    //     layoutConfig: {
    //       value: Array(setting.columns).fill(~~(24 / setting.columns)),
    //     },
    //     fields: setting.updateFields || setting.formFields,
    //   },
    // },
    {
      component: 'Form',
      config: {
        API: {
          getAPI: setting.getAPI,
          updateApplyAPI: setting.updateApplyAPI,
          getApplyHistoryAPI: setting.getApplyHistoryAPI
        },
        layout: 'Grid',
        layoutConfig: {
          value: Array(setting.columns).fill(~~(24 / setting.columns)),
        },
        fields: setting.updateFields || setting.formFields
      },
    },
  ],
};
