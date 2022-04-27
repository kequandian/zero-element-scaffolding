import React from 'react';
import ProjectActivities from '@/pages/_dataService/config/dataService/add';
 import useBreadcrumb from '@/framework/useBreadcrumb';
export default (props) => {
    useBreadcrumb([
        { title: '首页', path: '/' },
        { title: '管理员选项', path: '/designpage/config' },
        { title: "新增数据" },
    ]);
return <ProjectActivities />
}