import React from 'react';
import { history } from 'umi';
import win from 'zero-element/lib/utils/window';

import { getToken } from 'zero-element/lib/utils/request/token';

export default function (props) {
  // if (win.ZEle.indexPage) {
  //   history.push(win.ZEle.indexPage);
  // }
  
  const { location } = props;
  
  const { permStatus } = qs.parse(location.search.replace('?', ''));

  if(permStatus){
    window.localStorage.setItem('permStatus', false)
  }
  console.log('home props = ', permStatus)

  if (getToken()) {
    history.push('/admin');
  } else {
    history.push('/admin');
  }

  return (
    <div>
      首页
    </div>
  );
}
