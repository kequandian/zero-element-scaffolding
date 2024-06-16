import React from 'react';
import useBreadcrumb from '@/framework/useBreadcrumb';
import ProjectActivities from '@/pages/exporter/activitiesCustom/config/dataManage';
    
export default (props) => {
    useBreadcrumb([
        { title: '首页', path: '/' },
        { title: '高级配置', path: '/exporter' },
        { title: '自定义表单', path: '/exporter/activitiesCustom' },
        { title: '数据管理' },
    ]);

return <ProjectActivities />

}