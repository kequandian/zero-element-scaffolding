const formFields = require('./form.config');
const editFormFields = require('./editForm.config');

module.exports = {
  layout: 'Content',
  title: '表单分类',
  items: [
    {
      layout: 'Empty',
      component: 'Search',
      config: {
        share: 'fromCategory',
        fields: [

          { field: 'name', label: '表单名称', type: 'input' ,placeholder: '请输入', }
        ],
      },
    },
    {
      layout: 'Empty',
      component: 'TreeTable',
      config: {
        share: 'fromCategory',
        API: {
          listAPI: '/api/crud/eavEntityType/eavEntityTypes/list',
          appendAPI: '',
          deleteAPI: '/api/crud/eavEntityType/eavEntityTypes/(id)'
        },
        actions: [],
        fields: [
          { field: 'name', label: '表单名称' },
          { field: 'option', label: '备注' },
        ],
        operation: [
          {
            title: '编辑', type: 'modal',
            options: {
              modalTitle: '编辑组织',
              modalWidth: 640,
              outside: true,
              layout: 'Empty',
              items: [
                {
                  layout: 'Empty',
                  component: 'Form',
                  config: {
                    layout: 'Grid',
                    layoutConfig: {
                      value: [12, 12],
                    },
                    API: {
                      getAPI: '/api/crud/eavEntityType/eavEntityTypes/(id)',
                      updateAPI: '/api/crud/eavEntityType/eavEntityTypes/(id)',
                    },
                    fields: editFormFields,
                  }
                }
              ]
            }
          },
          {
            title: '新增子组织', type: 'modal', options: {
              "outside": true,
              // field: 'pid',
              // value: 'IS_NOT_NULL',
              modalTitle: '新增子组织',
              modalWidth: 640,
              layout: 'Empty',
              items: [
                {
                  layout: 'Grid',
                  component: 'Form',
                  config: {
                    layout: 'Grid',
                    layoutConfig: {
                      value: [12, 12],
                    },
                    API: {
                      createAPI: '/api/crud/eavEntityType/eavEntityTypes/(id)',
                    },
                    fields: formFields,
                  },
                }
              ],
            }
          },
          {
            title: '删除', type: 'delete',
            options: {
              field: 'pid',
              value: 'IS_NOT_NULL',
            }
          }
        ]
      },
    },
  ],
};