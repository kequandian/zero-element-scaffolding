import React from 'react';
import useBreadcrumb from '@/framework/useBreadcrumb';
import ZEle from 'zero-element';
import { Avatar } from 'antd'
import { removeToken, getUserName, getExtra, getAvatar } from 'zero-element/lib/utils/request/token';
import { UserOutlined } from '@ant-design/icons';
import {config} from './config/baseinfo_config'
import {UploadConfig} from './config/baseinfo_Uploadconfig'

export default function (props) {
  useBreadcrumb(props, [
    { title: '首页', path: '/' },
    { title: '个人中心' },
    { title: '修改个人信息' },
  ]);
  console.log(getAvatar())

  
  return <>
  <div className="User_Card">
    <div className="User_Header_Card">
      <Avatar
      style={{
        position:'absolute',
        left:'50%',
        transform: 'translateX(-50%)',
        top:'50px',
        marginBottom:'50px',
        fontSize:'4vh',
        // backgroundColor:'#1890FF'
      }}
      icon={(getAvatar()===' ')?getAvatar():<UserOutlined style={{fontSize:"12vh" ,lineHeight:"150px"}}/>}
      size={{
        xxl: 150,
      }}
      ></Avatar>
      {/* <ZEle style={
        {
          position:'absolute',
          bottom:'0px!important'
        }
      } namespace="security_baseInfo" config={UploadConfig}/> */}
    </div>
    <ZEle className="User_Body_Card" namespace='security_baseInfo' config={config} />
  </div>
  </>
}