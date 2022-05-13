import React from 'react';
import DetailsTemplate from '@/components/Details/DetailsTemplate';
import setting from './config/applicationManage-setting';
    
export default () => {

  return <DetailsTemplate
    namespace="applicationManage_view"
    setting={setting}
    config={setting.viewConfig}
  />
}
    
