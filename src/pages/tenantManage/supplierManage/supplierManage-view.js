import React from 'react';
import DetailsTemplate from '@/components/Details/DetailsTemplate';
import setting from './config/supplierManage-setting';
    
export default () => {

  return <DetailsTemplate
    namespace="supplierManage_view"
    setting={setting}
    config={setting.viewConfig}
  />
}
    
