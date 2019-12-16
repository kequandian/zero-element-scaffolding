import React from 'react';
import useBreadcrumb from '@/framework/useBreadcrumb';
import ZEle from 'zero-element';

const config = {
  layout: 'Content',
  title: '修改密码',
  items: [
    {
      layout: 'Empty',
      component: 'BaseForm',
      config: {
        goBack: false,
        API: {
          createAPI: '/api/sys/password/reset_password',
        },
        fields: [
          { field: 'oldPassword', label: '原密码', type: 'password' },
          { field: 'newPassword', label: '新密码', type: 'password' },
          { field: 'repeatpPassword', label: '重复新密码', type: 'password' },
        ]
      }
    }
  ]
};

export default function (props) {
  useBreadcrumb(props, [
    { title: '首页', path: '/' },
    { title: '个人中心' },
    { title: '修改密码' },
  ]);

  return <ZEle namespace='security_password' config={config} />

}