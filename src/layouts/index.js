import React, { useReducer } from 'react';
import { Switch } from 'react-router';
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
  const [state, dispatch] = useReducer(reducer, {
    breadcrumb: [],
    style: {
      nav: window.ZEle.nav,
      theme: window.ZEle.theme,
    },
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
      <PrimaryLayout {...props} breadcrumb={state.breadcrumb} >
        {injectChildren(props.children, {
          // dispatch,
          // global: state,
          OnBreadcrumb: handleBreadcrumb,
          OnBreadcrumbClear: handleBreadcrumbClear
        })}
      </PrimaryLayout>
    </GlobalContext.Provider>
  );
}

function injectChildren(children, props) {
  return React.Children.map(children, child => {
    if (child.type === Switch) {
      return React.cloneElement(child, null, React.Children.map(child.props.children, ch => {
        const nr = {};
        if (ch.props.render) {
          const orgRender = ch.props.render;
          nr.render = (orgProps) => {
            const comp = orgRender({ ...orgProps, ...props });
            return injectChildren(comp, props);
          };
        }
        return React.cloneElement(ch, { ...props, ...nr }, injectChildren(ch.props.children, props));
      }));
    } else {
      return React.cloneElement(child, null, injectChildren(child.props.children, props));
    }
  });
}

export default BasicLayout;
