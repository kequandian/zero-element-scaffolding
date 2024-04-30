import React from 'react';
import { PageHeader } from 'antd';
import BodyPage from './config/tableModal-bindingField';

import useBreadcrumb from '@/framework/useBreadcrumb';
import { useWillUnmount } from 'zero-element/lib/utils/hooks/lifeCycle';
import switchEndpoint from '@/components/switchEndpoint';

export default function workFlowListStep() {
    useBreadcrumb([
        { title: '首页', path: '/' },
        { title: '在线开发', path: '/nocode' },
        { title: '表模型', path: '/nocode/tableModal' },
        { title: '绑定字段' },
    ]);
    useWillUnmount(switchEndpoint)

    return <PageHeader
        title="绑定字段"
        ghost={false}
        onBack={() => window.history.back()}
    >
        <BodyPage/>
    </PageHeader>
};
