import React from 'react';
import ZEle from 'zero-element';
import {config} from './config/baseinfo_config'
export default function () {
  return <>
    <ZEle namespace='security_baseInfo' config={config} />
  </>
}