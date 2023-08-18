import React from 'react';
import ProjectActivities from '@/pages/workFlowManageFR/activitiesFR/config/ActivitiesFR/design';

import useBreadcrumb from '@/framework/useBreadcrumb';
    
export default (props) => {

    useBreadcrumb([
        { title: '首页', path: '/' },
        { title: '高级配置', path: '/exporter' },
        { title: '自定义表单', path: '/exporter/activitiesCustom' },
        { title: '可视化设计' },
    ]);

    return (
        <ProjectActivities />
    )
}