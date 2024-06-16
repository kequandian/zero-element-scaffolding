import React from 'react';
import DetailsTemplate from '@/components/Details/DetailsTemplate';
import setting from './config/advertiser-setting';
    
export default () => {

  return <DetailsTemplate
    namespace="advertiser_view"
    setting={setting}
    config={setting.viewConfig}
  />
}
    
