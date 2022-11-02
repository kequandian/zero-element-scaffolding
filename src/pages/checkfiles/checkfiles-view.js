import React from 'react';
import ZEle from 'zero-element';
const setting = require('./checkfiles-setting.json');

export default function () {

    const config = {
        layout: setting.layout.form,
        title: setting.pageName.view,
        items: [
          {
            component: 'Form',
            config: {
              API: {
                getAPI: setting.getAPI,
              },
              layout: 'Grid',
              layoutConfig: {
                value: Array(setting.columns).fill(~~(24 / setting.columns)),
              },
              fields: setting.viewConfig || setting.formFields,
              otherProps: {
                footerButton: false
              }
            },
          },
        ],
      }

		return <ZEle namespace="checkfiles-view" config={config} />
  }