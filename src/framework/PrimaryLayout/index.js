import React, { useContext, useMemo, useEffect } from 'react';
import { Layout } from 'antd';
import Breadcrumb from './Breadcrumb';
import Login from './Login';
import styles from './index.less';

import GlobalContext from '@/framework/GlobalContext';

import selectNavStyle from './utils/selectNavStyle';
import { init, changeTheme } from './theme';
init();

const { Header, Content } = Layout;

export default function PrimaryLayout({
  location, children,
  menuData, breadcrumb,
}) {
  const { style } = useContext(GlobalContext);
  const { nav, theme } = style;

  const [
    TopNav, TopNavData,
    LeftNav, LeftNavData
  ] = useMemo(_ => {
    return selectNavStyle(nav, menuData, location.pathname);
  }, [nav, menuData, location.pathname]);
  useEffect(_ => {
    changeTheme(theme);
  }, [theme]);

  const aloneView = location.pathname === '/login';

  return <Layout>
    {aloneView ? null : (
      <Header className={styles.topNav}>
        <div className={styles.logo}>
          <a href="/">
            Zero Code
        </a>
        </div>
        <TopNav path={location.pathname} menuData={TopNavData} />
        <div className={styles.login}>
          <Login />
        </div>
      </Header>
    )}
    <Layout className="ant-layout-has-sider">
      {aloneView ? null : (
        <LeftNav path={location.pathname} menuData={LeftNavData} />
      )}
      <Layout id="contentContainer" style={
        aloneView ? undefined : { padding: '0 24px 24px' }
      }>
        {aloneView ? null : (
          <Breadcrumb path={location.pathname} breadcrumb={breadcrumb} />
        )}
        <Content>
          {children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
}