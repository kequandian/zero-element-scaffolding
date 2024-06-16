import React from 'react';
import DetailsTemplate from '@/components/Details/DetailsTemplate';
import setting from './config/navList-setting';
    
export default () => {

  return <DetailsTemplate
    namespace="navList_view"
    setting={setting}
    config={setting.viewConfig}
  />
}
    
