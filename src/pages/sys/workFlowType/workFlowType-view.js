import React from 'react';
import DetailsTemplate from '@/components/Details/DetailsTemplate';
import setting from './config/workFlowType-setting';
    
export default () => {

  return <DetailsTemplate
    namespace="workFlowType_view"
    setting={setting}
    config={setting.viewConfig}
  />
}
    
