import React from 'react';
import DetailsTemplate from '@/components/Details/DetailsTemplate';
import setting from './config/pageSettingConvert-setting';
    
export default () => {

  return <DetailsTemplate
    namespace="pageSettingConvert_view"
    setting={setting}
    config={setting.viewConfig}
  />
}
    
