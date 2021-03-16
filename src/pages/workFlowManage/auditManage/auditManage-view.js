import React from 'react';
import DetailsTemplate from '@/components/Details/DetailsTemplate';
import setting from './config/auditManage-setting';
    
export default () => {

  return <DetailsTemplate
    namespace="auditManage_view"
    setting={setting}
    config={setting.viewConfig}
  />
}
    
