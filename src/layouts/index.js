import React, { useReducer, useState, useEffect } from 'react';
import PrimaryLayout from '@/framework/PrimaryLayout';
import GlobalContext from '@/framework/GlobalContext';
import window from 'zero-element/lib/utils/window';

function reducer(state, { type, payload }) {
  const method = {
    save() {
      return {
        ...state,
        ...payload,
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

  const [state, dispatch] = useReducer(reducer, {
    style: {
      nav: window.ZEle.nav,
      theme: window.ZEle.theme,
    }
  });

  return (
    <GlobalContext.Provider value={state}>
      <PrimaryLayout
        {...props}
        pathname={pathname}
      >
      </PrimaryLayout>
    </GlobalContext.Provider>
  );
}

export default BasicLayout;
