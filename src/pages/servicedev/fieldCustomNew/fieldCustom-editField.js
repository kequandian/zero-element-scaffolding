import React from 'react';
import { PageHeader } from 'antd';
import BodyPage from './config/fieldCustom-editField';

import useBreadcrumb from '@/framework/useBreadcrumb';
import { useWillUnmount } from 'zero-element/lib/utils/hooks/lifeCycle';
import switchEndpoint from '@/components/switchEndpoint';

export default function workFlowListStep() {
    useBreadcrumb([
        { title: '首页', path: '/' },
        { title: '服务开发', path: '/servicedev' },
        { title: '自定义字段', path: '/servicedev/fieldCustomNew' },
        { title: '编辑字段' },
    ]);
    useWillUnmount(switchEndpoint)

    return <PageHeader
        title="编辑字段"
        ghost={false}
        onBack={() => window.history.back()}
    >
        <BodyPage/>
    </PageHeader>
};
