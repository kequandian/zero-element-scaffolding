export const UploadConfig = {
    layout: 'Content',
    // title: '个人信息',
    items: [
      {
        layout: 'Empty',
        component: 'ChildrenForm',
        config: {
          goBack: false,
          API: {
            getAPI: '/api/adm/users/userInfo',
            updateAPI: '/api/adm/users/self',
          },
          layout: 'Grid',
          layoutConfig: {
            value: [12, 12],
          },
          fields: [
            {
                field: 'avatar', type: 'upload-image',
                options: {
                  API: '/api/fs/uploadfile',
                  type: 'text',
                  max: 1,
                },
                span: 24,
              },
          ]
        }
      }
    ]
  };