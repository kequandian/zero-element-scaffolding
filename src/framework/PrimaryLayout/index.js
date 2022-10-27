/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/first */
import React, { useContext, useMemo, useState, useEffect } from 'react';
import { Layout } from 'antd';
import { useModel } from 'zero-element/lib/Model';
import { useDocumentVisibility } from 'ahooks';
import './index.less';
import GlobalContext from '@/framework/GlobalContext';
const { Content } = Layout;

export default function PrimaryLayout({
  location, children,
}) {

  const globalModel = useModel('global');
  const { permissions } = globalModel;
  const documentVisibility = useDocumentVisibility();

  useEffect(_ => {
    if (documentVisibility === 'visible') {
      globalModel.queryPerm();
    }
  }, [permissions, documentVisibility]);
  

  return <Layout className="pageContainer">
        <Content>
          {children}
        </Content>
    </Layout>
}

