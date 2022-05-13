import React from 'react';
import DetailsTemplate from '@/components/Details/DetailsTemplate';
import setting from './config/modulesManage-setting';
    
export default () => {

  return <DetailsTemplate
    namespace="modulesManage_view"
    setting={setting}
    config={setting.viewConfig}
  />
}
    
