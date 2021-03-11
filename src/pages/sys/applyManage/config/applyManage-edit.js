const setting = require('./applyManage-setting.json');
const applyFormFileds = require("./approveFormConfig");

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
      component: 'custom_form',
      config: {
        API: {
          getAPI: setting.getAPI,
          updateApplyAPI: setting.updateApplyAPI,
        },
        layout: 'Grid',
        layoutConfig: {
          value: Array(setting.columns).fill(~~(24 / setting.columns)),
        },
        fields: setting.updateFields || setting.formFields,
        otherProps:{
          submitBtnText: '提交',
          isApplied: true,
          applyFormFileds: applyFormFileds.fields
        }
      },
    },
  ],
};
