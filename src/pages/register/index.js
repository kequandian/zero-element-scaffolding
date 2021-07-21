import React from 'react';
import { history } from 'umi';
import { message } from 'antd';
import qs from 'qs';
import { getToken, saveToken } from 'zero-element/lib/utils/request/token';
import { useModel } from 'zero-element/lib/Model';

export default function (props) {

    const { location } = props;
    const { token } = qs.parse(location.search.replace('?', ''));
    const model = useModel('global');

    if(token){
        saveToken({
            token,
        })
        model.setRequestCount(3)
        model.queryPerm(false);
        history.push('/admin');
    }else{
        message.error('token不能为空')
    }

  return <div></div>
}
