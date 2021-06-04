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
          {field: 'correctionModel', label: '纠正ID', type: 'input'}
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
          {
            title: '添加话术', type: 'path',
            options: {
              path: '/aiFitness/colloquialism/colloquialism-add'
            },
          },
        ],

        fields: [
          {label: '纠正ID', field: 'correctionModel', width: 180, },
          {label: '纠正说明', field: 'modelEnglishName', width: 250,},
          {label: '话术描述', field: 'collectionTerm'},

        ],
        operation: [
          {
            title: '详情', type: 'path',
            options: {
              outside: false,
              path: '/aiFitness/colloquialism/colloquialism-view'
            },
          },

          {
            title: '编辑', type: 'path',
            options: {
              outside: false,
              path: '/aiFitness/colloquialism/colloquialism-edit',
            },
          },
          {
            title: '删除', type: 'delete',
          },
        ],
      },
    },
  ],
};
