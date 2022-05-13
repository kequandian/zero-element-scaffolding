import React from 'react';
import DetailsTemplate from '@/components/Details/DetailsTemplate';
import setting from './config/applicationExamplesManage-setting';
    
export default () => {

  return <DetailsTemplate
    namespace="applicationExamplesManage_view"
    setting={setting}
    config={setting.viewConfig}
  />
}
    
