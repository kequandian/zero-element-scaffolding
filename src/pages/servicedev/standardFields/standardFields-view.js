import React from 'react';
import DetailsTemplate from '@/components/Details/DetailsTemplate';
import setting from './config/standardFields-setting.json';
    
export default () => {

  return <DetailsTemplate
    namespace="standardFields_view"
    setting={setting}
    config={setting.viewConfig}
  />
}
    
