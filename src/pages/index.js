import React from 'react';
import { history } from 'umi';
import win from 'zero-element/lib/utils/window';

import { getToken } from 'zero-element/lib/utils/request/token';

export default function () {
  // if (win.ZEle.indexPage) {
  //   history.push(win.ZEle.indexPage);
  // }

  history.push('/activitiesManage/activities');
  // if (getToken()) {
  //   history.push('/activitiesManage/activities');
  // } else {
  //   history.push('/login');
  // }

  return (
    <div>
      首页
    </div>
  );
}
