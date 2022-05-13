import React from 'react';
import DetailsTemplate from '@/components/Details/DetailsTemplate';
import setting from './config/contractManage-setting';
    
export default () => {

  return <DetailsTemplate
    namespace="contractManage_view"
    setting={setting}
    config={setting.viewConfig}
  />
}
    
