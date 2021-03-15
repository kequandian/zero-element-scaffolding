import React, { useReducer } from 'react';
import PrimaryLayout from '@/framework/PrimaryLayout';
import GlobalContext from '@/framework/GlobalContext';
import window from 'zero-element/lib/utils/window';
import { BackTop } from 'antd';

import router from '@/config/router.config';
import profileMenuData from '@/config/profile.config';
import { getModel } from 'zero-element/lib/Model';

const menuData = [...router];

function reducer(state, { type, payload }) {
  const method = {
    save() {
      return {
        ...state,
        ...payload,
      }
    },
    clearBc() {
      return {
        ...state,
        breadcrumb: [],
      }
    },
    defaults() {
      console.warn(`未定义的方法: ${type}`);
      return state;
    }
  };
  return (method[type] || method['defaults'])();
};

function BasicLayout(props) {
  const { location } = props;
  const { pathname } = location;

  const menuConfigModel = getModel('menuConfig');
  // console.log('menuTree = ', menuConfigModel.getMenuTree());
  // router.push(...menuConfigModel.getMenuTree());

  const [state, dispatch] = useReducer(reducer, {
    breadcrumb: [],
    style: {
      nav: window.ZEle.nav,
      theme: window.ZEle.theme,
    },
    OnBreadcrumb: handleBreadcrumb,
    OnBreadcrumbClear: handleBreadcrumbClear,
  });

  function handleBreadcrumb(breadcrumb) {
    dispatch({
      type: 'save',
      payload: {
        breadcrumb,
      },
    });
  }
  function handleBreadcrumbClear() {
    dispatch({
      type: 'clearBc',
    });
  }

  return (
    <GlobalContext.Provider value={state}>
      <BackTop
        target={_ => document.getElementById('contentContainer')}
      />
      <PrimaryLayout
        {...props}
        breadcrumb={state.breadcrumb}
        menuData={switchMenuData(pathname)}
      >
      </PrimaryLayout>
    </GlobalContext.Provider>
  );
}

const reg = /^\/profile\//;
function switchMenuData(pathname) {
  if (reg.test(pathname)) {
    return profileMenuData;
  }

  return menuData;
}

export default BasicLayout;
