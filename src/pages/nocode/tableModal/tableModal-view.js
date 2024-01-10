import React from 'react';
import useBreadcrumb from '@/framework/useBreadcrumb';
import TableModalDetails from '@/pages/nocode/tableModal/config/tableModal-view';

export default function AllianceManageAdd(props) {
  useBreadcrumb([
    { title: '主页', path: '/' },
    { title: '', path: '/表模型' },
    { title: '详情' },
  ]);

  return <TableModalDetails location={props.location} />;
};