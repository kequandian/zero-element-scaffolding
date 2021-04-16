const setting = require('./advertiserReport-setting.json');

module.exports = {
  layout: setting.layout.table,
  title: setting.pageName.table,
  items: [
    {
      component: 'AutoReportSearch',
      config: {},
    },
    {
      component: 'AutoReport',
      config: {
        pageSize: 20,
        API: {
          listAPI: setting.listAPI,
        },
        actions: setting.tableActions,
        fields: [],
        operation: []
      },
    },
  ],
};
