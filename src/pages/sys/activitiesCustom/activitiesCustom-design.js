import React from 'react';
import ProjectActivities from '@/pages/workFlowManageFR/activitiesFR/config/ActivitiesFR/design';

import useBreadcrumb from '@/framework/useBreadcrumb';
    
export default (props) => {

    useBreadcrumb([
        { title: '首页', path: '/' },
        { title: '系统管理', path: '/sys' },
        { title: '自定义表单', path: '/sys/activitiesCustom' },
        { title: '可视化设计' },
    ]);

    return (
        <ProjectActivities />
    )
}