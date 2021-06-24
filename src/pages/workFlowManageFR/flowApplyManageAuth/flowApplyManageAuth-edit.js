import { PageHeader } from 'antd';
import React from 'react';
import ZEle from 'zero-element';
import config from './config/flowApplyManageAuth-edit';

import useBreadcrumb from '@/framework/useBreadcrumb';
import { useWillUnmount } from 'zero-element/lib/utils/hooks/lifeCycle';
import switchEndpoint from '@/components/switchEndpoint';

export default function WorkFlowListApply() {

    useBreadcrumb([
        { title: '首页', path: '/' },
        { title: '审核', path: '/workFlowManageFR' },
        { title: '流程申请管理', path: '/workFlowManageFR/flowApplyManageAuth' },
        { title: '查看详情' },
    ]);
    useWillUnmount(switchEndpoint)

    return <PageHeader
        title="查看详情"
        ghost={false}
        onBack={() => window.history.back()}
    >
        <ZEle namespace="flowApplyManageAuth_edit" config={config} />
    </PageHeader>
};