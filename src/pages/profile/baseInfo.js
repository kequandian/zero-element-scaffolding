import React from 'react';
import useBreadcrumb from '@/framework/useBreadcrumb';
import ZEle from 'zero-element';
import { Avatar } from 'antd'
import { removeToken, getUserName, getExtra, getAvatar } from 'zero-element/lib/utils/request/token';
import { UserOutlined } from '@ant-design/icons';
import {config} from './config/baseinfo_config'
import {UploadConfig} from './config/baseinfo_Uploadconfig'
export default function () {
  useBreadcrumb([
    { title: '首页', path: '/' },
    { title: '用户管理'},
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
        // backgroundColor:'#1890FF'
      }}
      src={(getAvatar()!==' ')?getAvatar():""}

      icon={(getAvatar()===' ')?<UserOutlined size={200}/>:""}
      size={150}
      ></Avatar>

    </div>
    <ZEle namespace='security_baseInfo' config={config} />
  </div>
  </>
}