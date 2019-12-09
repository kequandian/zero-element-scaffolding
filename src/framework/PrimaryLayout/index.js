import React, { useContext, useMemo, useEffect } from 'react';
import { Layout } from 'antd';
import Breadcrumb from './Breadcrumb';
import Login from './Login';
import styles from './index.less';

import GlobalContext from '@/framework/GlobalContext';
import menuData from '@/config/router.config';

import selectNavStyle from './utils/selectNavStyle';
import { init, changeTheme } from './theme';
init();

const { Header, Content } = Layout;

export default function PrimaryLayout({ location, breadcrumb, children }) {
  const { style } = useContext(GlobalContext);
  const { nav, theme } = style;

  const [
    TopNav, TopNavData,
    LeftNav, LeftNavData
  ] = useMemo(_ => {
    return selectNavStyle(nav, menuData, location.pathname);
  }, [nav, location.pathname]);
  useEffect(_ => {
    changeTheme(theme);
  }, [theme]);

  if (location.pathname === '/login') {
    return children;
  }

  return <Layout>
    <Header className={styles.topNav}>
      <TopNav path={location.pathname} menuData={TopNavData} />
      <div className={styles.login}>
        <Login />
      </div>
    </Header>
    <Layout className="ant-layout-has-sider">
      <LeftNav path={location.pathname} menuData={LeftNavData} />
      <Layout id="contentContainer" style={{ padding: '0 24px 24px' }}>
        <Breadcrumb path={location.pathname} breadcrumb={breadcrumb} />
        <Content>
          {children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
}