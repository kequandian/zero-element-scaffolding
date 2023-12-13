import React from 'react';
import DetailsTemplate from '@/components/Details/DetailsTemplate';
import setting from './config/relationalModel-setting.json';
    
export default () => {

  return <DetailsTemplate
    namespace="relationalModel_view"
    setting={setting}
    config={setting.viewConfig}
  />
}
    
