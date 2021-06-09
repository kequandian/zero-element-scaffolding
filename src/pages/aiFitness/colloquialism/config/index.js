const addColloquialism = require('../colloquialism-add/config/formFields');
// const editColloquialism = require('../colloquialism-edit/config/formFields');

module.exports = {
  layout: 'Content',
  title: '纠正话术管理',
  items: [
    {
      layout: 'Empty',
      component: 'Search',
      config: {
        share: 'colloquialism',
        fields: [
          {field: 'modelEnglishName', label: '模型', type: 'input'}
        ],
      },
    },

    {
      layout: 'Empty',
      component: 'Table',
      config: {
        share: 'colloquialism',
        API: {
          listAPI: '/api/crud/correctTerms/correctTermses',
          deleteAPI: '/api/crud/correctTerms/correctTermses/(id)',
        },
        actions: [
          // {
          //   title: '添加话术', type: 'path',
          //   options: {
          //     path: '/aiFitness/colloquialism/colloquialism-add'
          //   },
          // },
          {
            title: '添加话术', type: 'modal',
            options: {
              modalTitle: '添加话术',
              modalWidth: 600,
              items: [
                {
                  component: 'Form',
                  config: {
                    layout: 'Grid',
                    API: {
                      createAPI: '/api/crud/correctTerms/correctTermses'
                    },
                    fields: addColloquialism,
                  }
                }
              ]
            }
          }
        ],

        fields: [
          {label: '模型', field: 'modelEnglishName', width: 180, },
          {label: '模型说明', field: 'correctionModel', width: 250,},
          {label: '话术', field: 'collectionTerm'},

        ],
        operation: [
          // {
          //   title: '详情', type: 'path',
          //   options: {
          //     outside: false,
          //     path: '/aiFitness/colloquialism/colloquialism-view'
          //   },
          // },

          // {
          //   title: '编辑', type: 'path',
          //   options: {
          //     outside: false,
          //     path: '/aiFitness/colloquialism/colloquialism-edit',
          //   },
          // },
          {
            title: '编辑', type: 'modal',
            options: {
              outside: false,
              modalTitle: '编辑话术',
              modalWidth: 600,
              items: [
                {
                  component: 'Form',
                  config: {
                    layout: 'Grid',
                    API: {
                      getAPI: '/api/crud/correctTerms/correctTermses/(id)',
                      updateAPI: '/api/crud/correctTerms/correctTermses/(id)',
                    },
                    fields: addColloquialism,
                  }
                }
              ]
            }
          },
          {
            title: '删除', type: 'delete',
          },
        ],
      },
    },
  ],
};
