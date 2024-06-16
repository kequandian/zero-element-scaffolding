import React from 'react';
import DetailsTemplate from '@/components/Details/DetailsTemplate';
import setting from './config/navCategory-setting';
    
export default () => {

  return <DetailsTemplate
    namespace="navCategory_view"
    setting={setting}
    config={setting.viewConfig}
  />
}
    
