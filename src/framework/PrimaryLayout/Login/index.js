import React, { useState } from 'react';
import { history } from 'umi';
import { removeToken, getUserName, getExtra, getAvatar } from 'zero-element/lib/utils/request/token';
import { Avatar, Menu, Dropdown, Modal } from 'antd';
import {
  BellOutlined,
  UserOutlined,
  AppstoreOutlined,
  LogoutOutlined,
  SwapOutlined,
} from '@ant-design/icons';

import { TestUserSelection } from 'zero-element-plugins';

import { LS } from 'zero-element/lib/utils/storage';

import './index.less'

const { SubMenu } = Menu;

export default (props) => {

  const [visible, useVisible] = useState(false);
  const [uVisible, useUVisible] = useState(false);

  function handleVisibleChange(visible) {
    useVisible(visible);
    if (!visible) {
      useUVisible(false)
    }
  }

  function handleOnItemClickHandle() {
    useVisible(false);
    useUVisible(false);
  }


  function handleLogOut() {
    LS.del('menuList');
    useVisible(false);
    removeToken();
    history.push('/login');
  }

  function handleRouteToProfile() {
    history.push('/profile/baseInfo');
    useVisible(false);
  }

  function openToDoListPage() {
    history.push('/toDoList');
  }

  const menu = (
    <Menu>
      {/* <Menu.Item disabled>
        <div style={{ textAlign: 'center', cursor: 'default', color: '#666' }}>{getUserName()}</div>
      </Menu.Item> */}
      <Menu.Item onClick={handleRouteToProfile}>
        <AppstoreOutlined />
        <span className="ZEleA-margin-left">个人中心</span>
      </Menu.Item>
      <Menu.Divider />
      {process.env.NODE_ENV === 'development' ? (
        <>
          <Menu.Item onClick={_ => useUVisible(true)}>
            <SwapOutlined />
            <span className="ZEleA-margin-left">切换账号</span>
          </Menu.Item>
          <Menu.Divider />
        </>
      ) : null}
      <Menu.Item onClick={handleLogOut}>
        <LogoutOutlined />
        <span className="ZEleA-margin-left">退出账号</span>
      </Menu.Item>
    </Menu>
  );

  const userMenu = (
    <Menu>
      <Menu.Item style={{ padding: 0 }} key="userMenu">
        <TestUserSelection onItemClickHandle={handleOnItemClickHandle} />
      </Menu.Item>
    </Menu>
  )

  const messageMenu = (
    <Menu>
      <Menu.Item key="1" onClick={_ => openToDoListPage(true)}>
        待办事项
      </Menu.Item>
    </Menu>
  )


  return (
    <div style={{ 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center' }}>
      <a href="http://docs.smallsaas.cn" className="RightNav">前往文档</a>
      <Dropdown
        trigger={['click']}
        placement="bottomLeft"
        overlay={messageMenu}
      >
        <BellOutlined style={{ fontSize: 25, paddingRight: 20 }} />
      </Dropdown>

      <Dropdown
        trigger={['click']}
        overlay={messageMenu}
      >
        <BellOutlined />
      </Dropdown>
      <Dropdown
        placement="bottomRight"
        trigger={['click']}
        visible={visible}
        onVisibleChange={handleVisibleChange}
        overlay={uVisible ? userMenu : visible ? menu : <></>}
      >
        <div>
          <span>{getUserName()}</span>
          <span>{getExtra()}</span>
          <Avatar src={getAvatar()} icon={<UserOutlined />} size={40} />
        </div>
      </Dropdown>

    </div>
  )

}