import React from 'react';
import { PageHeader } from 'antd';
import ZEle from 'zero-element';
import config from './config/fieldCustom-apply/config';

import useBreadcrumb from '@/framework/useBreadcrumb';
import { useWillUnmount } from 'zero-element/lib/utils/hooks/lifeCycle';
import switchEndpoint from '@/components/switchEndpoint';

export default function WorkFlowListApply() {

    useBreadcrumb([
        { title: '首页', path: '/' },
        { title: '自定义表单', path: '/formCustom' },
        { title: '自定义字段', path: '/formCustom/fieldCustom' },
        { title: '发起申请' },
    ]);
    useWillUnmount(switchEndpoint)

    return <PageHeader
        title="发起申请"
        ghost={false}
        onBack={() => window.history.back()}
    >
        <ZEle namespace="fieldCustom_apply" config={config} />
    </PageHeader>
};
