import React from 'react';
import useBreadcrumb from '@/framework/useBreadcrumb';
import TableModalDetails from '@/pages/servicedev/tableModal/config/tableModal-view';

export default function AllianceManageAdd(props) {
  useBreadcrumb([
    { title: '主页', path: '/' },
    { title: '表模型', path: '/表模型' },
    { title: '详情' },
  ]);

  return <TableModalDetails location={props.location} />;
};