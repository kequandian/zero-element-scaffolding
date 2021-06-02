import React from 'react';
import useBreadcrumb from '@/framework/useBreadcrumb';
import Activities from '@/pages/dataService/config/dataService';
export default (props) => {
        useBreadcrumb([
        { title: '首页', path: '/' },
        { title: '管理员选项', path: '/designpage/config' },
        { title: '数据服务'}
    ]);
    return <Activities />;
}
