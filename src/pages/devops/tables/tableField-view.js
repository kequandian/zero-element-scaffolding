import React from 'react';
import DetailsTemplate from '@/components/Details/DetailsTemplate';
import setting from './config/dateTables-setting';
    
export default () => {

  return <DetailsTemplate
    namespace="tableField_view"
    setting={setting}
    config={setting.viewConfig}
  />
}
    
