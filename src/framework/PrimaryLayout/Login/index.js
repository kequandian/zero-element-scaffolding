import React from 'react';
import router from 'umi/router';
import { Avatar, Menu, Dropdown } from 'antd';

function handleLogOut() {
  router.push('/login');
}
const menu = (
  <Menu>
    <Menu.Item disabled>
      个人信息
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item onClick={handleLogOut}>
      退出账号
    </Menu.Item>
  </Menu>
);

export default (props) => {
  return <Dropdown overlay={menu} placement="bottomRight">
    <Avatar icon="user" />
  </Dropdown>
}