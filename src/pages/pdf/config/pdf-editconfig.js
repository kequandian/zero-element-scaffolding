let pageConfig = require("@/../public/setting.json")

module.exports = {
    layout: pageConfig.layout.form,
    title: pageConfig.pageName.edit,
    items: [
      {
        component: 'Form',
        config: {
          API: {
            getAPI: pageConfig.getAPI,
            updateAPI: pageConfig.updateAPI,
          },
          layout: 'Grid',
          layoutConfig: {
            value: Array(pageConfig.columns).fill(~~(24 / pageConfig.columns)),
          },
          fields: pageConfig.updateFields || pageConfig.formFields,
        },
      },
    ],
}