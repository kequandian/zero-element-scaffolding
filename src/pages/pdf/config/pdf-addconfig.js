let pageConfig = require("@/../public/setting.json")

module.exports = {
    layout: pageConfig.layout.form,
    title: pageConfig.pageName.new,
    items: [
      {
        component: 'Form',
        config: {
          API: {
            createAPI: pageConfig.createAPI,
          },
          layout: 'Grid',
          layoutConfig: {
            value: Array(pageConfig.columns).fill(~~(24 / pageConfig.columns)),
          },
          fields: pageConfig.createFields || pageConfig.formFields,
        },
      },
    ],
}