import React from 'react';
import ZEle from 'zero-element';
import useBreadcrumb from '@/framework/useBreadcrumb';
import config from './config/view/categroyView-config';

export default function categroyView(){
    useBreadcrumb([
        { title: '主页', path: '/' },
        { title: '产品类别', path: '/mallManage/categroy' },
        { title: '类别详情' }
      ]);    
    return <ZEle namespace="product_categroy_view" config={config} />;
}