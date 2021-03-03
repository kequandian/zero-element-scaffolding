import React from 'react';
import DetailsTemplate from '@/components/Details/DetailsTemplate';
import setting from './config/workFlowList-setting';
    
export default () => {

  return <DetailsTemplate
    namespace="workFlowList_view"
    setting={setting}
    config={setting.viewConfig}
  />
}
    
