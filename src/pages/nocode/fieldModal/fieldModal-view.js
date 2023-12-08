import React from 'react';
import DetailsTemplate from '@/components/Details/DetailsTemplate';
import setting from './config/fieldModal-setting.json';
    
export default () => {

  return <DetailsTemplate
    namespace="fieldModal_view"
    setting={setting}
    config={setting.viewConfig}
  />
}
    
