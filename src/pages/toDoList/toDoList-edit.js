import { PageHeader } from 'antd';
import React from 'react';
import ZEle from 'zero-element';
import config from './config/toDoList-edit';

import useBreadcrumb from '@/framework/useBreadcrumb';

export default function WorkFlowListApply() {

    useBreadcrumb([
        { title: '首页', path: '/' },
        { title: '待办事项', path: '/toDoList' },
        { title: '审核' },
    ]);

    return <PageHeader
        title="审核"
        ghost={false}
        onBack={() => window.history.back()}
    >
        <ZEle namespace="toDoList_edit" config={config} />
    </PageHeader>
};