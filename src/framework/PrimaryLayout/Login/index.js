import React from 'react';
import { history } from 'umi';
import { removeToken, getUserName, getExtra, getAvatar } from 'zero-element/lib/utils/request/token';
import { Avatar, Menu, Dropdown } from 'antd';
import {
  BellOutlined,
  UserOutlined,
  AppstoreOutlined,
  LogoutOutlined,
  SwapOutlined,
} from '@ant-design/icons';


import { LS } from 'zero-element/lib/utils/storage';

import './index.less'

function handleLogOut() {
  LS.del('menuList');
  removeToken();
  history.push('/login');
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
      <Menu.Item style={{width:200,height:180,position:"relative",cursor:'default'}}>
        <Avatar src={getAvatar()} style={{position:'absolute',left:'50%',top:35,transform:' translate(-50%)'}} icon={<UserOutlined style={{fontSize:60,paddingTop:8,paddingLeft:5}}/>} size={90} />

        <span style={{fontSize:17,textAlign:'center',fontWeight:'bolder',position:'absolute',bottom:20,left:'50%',transform:' translate(-50%)'}}>{getUserName()}</span>
      </Menu.Item>
      <Menu.Item onClick={handleRouteToProfile}>
        <AppstoreOutlined style={{paddingLeft:10}} />
        <span className="ZEleA-margin-left">个人中心</span>
      </Menu.Item>
      <Menu.Divider />
        {process.env.NODE_ENV === 'development' ? (
          <>
            <Menu.Item onClick={_ => useUVisible(true)}>
              <SwapOutlined style={{paddingLeft:10}}/>
              <span className="ZEleA-margin-left">切换账号</span>
            </Menu.Item>
            <Menu.Divider />
          </>
        ) : null}
      <Menu.Item onClick={handleLogOut}>
        <LogoutOutlined style={{paddingLeft:10}}/>
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
      <a href="http://docs.smallsaas.cn" className="RightNav">前往文档</a>
      <Dropdown
        trigger={['click']}
        placement="bottomLeft"
        overlay={messageMenu}
      >
        <BellOutlined style={{fontSize:25,paddingRight:20}}/>
      </Dropdown>
      <Dropdown 
      overlay={menu} 
      placement="bottomRight"
      trigger={['click']}>
        <div>
          <span style={{fontSize:22}}>|</span>
          <span style={{paddingRight:15,paddingLeft:15,fontSize:17}}>{getUserName()}</span>
          <span style={{fontSize:0}}>{getExtra()}</span>
          <Avatar src={getAvatar()} icon={<UserOutlined style={{fontSize:24}}/>} size={36} />
        </div>
      </Dropdown>
    </div>
  )

}