import React from 'react';
import ZEle from 'zero-element';
import useBreadcrumb from '@/framework/useBreadcrumb';
import config from './config/Ad/index.config';

export default function Ad(props) {
  const { location } = props;

  useBreadcrumb([
    { title: '主页', path: '/' },
    { title: '商城配置' },
    { title: '广告配置', path: '/setting/adGroup' },
    { title: '广告组配置' },
  ]);

  return <ZEle
    namespace='ad'
    config={config}
    extraData={{
      name: location.query.name,
      id: location.query.id,
    }
    }
  />;
}
