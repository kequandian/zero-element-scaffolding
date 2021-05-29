import React from 'react';
import ProjectActivities from '@/pages/dataService/config/dataService/detail';
    import useBreadcrumb from '@/framework/useBreadcrumb';
export default (props) => {
        useBreadcrumb([
        { title: '首页', path: '/' },
        { title: '管理员选项', path: '/designpage/config' },
        { title: '数据服务', path: '/dataService' },
        { title: '数据管理' },
    ]);
return <ProjectActivities />
}