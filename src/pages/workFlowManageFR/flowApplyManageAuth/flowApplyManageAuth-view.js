import React from 'react';
import DetailsTemplate from '@/components/Details/DetailsTemplate';
import setting from './config/flowApplyManageAuth-setting';
    
export default () => {

  return <DetailsTemplate
    namespace="flowApplyManageAuth_view"
    setting={setting}
    config={setting.viewConfig}
  />
}
    
