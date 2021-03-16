import React from 'react';
import { history } from 'umi';
import { removeToken, getUserName, getExtra, getAvatar } from 'zero-element/lib/utils/request/token';
import { Avatar, Menu, Dropdown } from 'antd';
import {
  BellOutlined,
  UserOutlined,
  AppstoreOutlined,
  LogoutOutlined
} from '@ant-design/icons';

function handleLogOut() {
  history.push('/login');
  removeToken();
}
function handleRouteToProfile() {
  history.push('/profile/baseInfo');
}


function openToDoListPage(){
  history.push('/toDoList');
}


export default (props) => {
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
      <Menu.Item onClick={handleLogOut}>
        <LogoutOutlined />
        <span className="ZEleA-margin-left">退出账号</span>
      </Menu.Item>
    </Menu>
  );

  const messageMenu = (
    <Menu>
      <Menu.Item key="1" onClick={_ => openToDoListPage(true)}>
        待办事项
      </Menu.Item>
    </Menu>
  )

  return (
    <div style={{'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'}}>
      <Dropdown
        trigger={['click']}
        placement="bottomLeft"
        overlay={messageMenu}
      >
        <BellOutlined />
      </Dropdown>
      <Dropdown 
      overlay={menu} 
      placement="bottomRight"
      trigger={['click']}>
        <div>
          <span>{getUserName()}</span>
          <span>{getExtra()}</span>
          <Avatar src={getAvatar()} icon={<UserOutlined />} size={40} />
        </div>
      </Dropdown>
    </div>
  )

}