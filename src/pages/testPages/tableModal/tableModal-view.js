import React from 'react';
import DetailsTemplate from '@/components/Details/DetailsTemplate';
import setting from './config/tableModal-setting.json';
    
export default () => {

  return <DetailsTemplate
    namespace="tableModal_view"
    setting={setting}
    config={setting.viewConfig}
  />
}
    
