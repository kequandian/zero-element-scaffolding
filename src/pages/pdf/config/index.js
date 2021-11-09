let pageConfig = require("@/../public/setting.json")

module.exports = {
    layout: pageConfig.layout.table,
    title: pageConfig.pageName.table,
    config:{
      style:{
        "min-width":pageConfig.minWidth
      }
    },
    items: [
      {
        component: pageConfig.searchType||'Search',
        config: {
          type:pageConfig.searchButtonType||"default",
          fields: pageConfig.searchFields,
        },
      },
      {
        component: 'Table',
        config: {
          API: {
            listAPI: pageConfig.listAPI,
            deleteAPI: pageConfig.deleteAPI,
          },
          actions: pageConfig.tableActions,
          fields: pageConfig.tableFields,
          operation: pageConfig.tableOperation,
        },
      },
    ],
  }