import React from 'react';
import { history } from 'umi';

export default function () {
  
  history.push('/testField');

  return (
    <div>
      首页
    </div>
  );
}
