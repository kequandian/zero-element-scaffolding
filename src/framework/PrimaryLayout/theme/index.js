import window from 'zero-element/lib/utils/window';

function init() {
  const orignalSetItem = localStorage.setItem;

  localStorage.setItem = function (key, newValue) {
    if (key === 'theme') {
      const onThemeChange = new Event("onThemeChange");
      onThemeChange.newValue = newValue;
      window.dispatchEvent(onThemeChange);
    }
    // if (key === 'nav') {
    //   const onNavChange = new Event("onNavChange");
    //   onNavChange.newValue = newValue;
    //   window.dispatchEvent(onNavChange);
    // }
    orignalSetItem.apply(this, arguments);
  }

  window.addEventListener("onThemeChange", function (e) {
    changeTheme(e.newValue);
  });
}

function changeTheme(value) {
  if (window.less && typeof window.less.modifyVars === 'function') {
    window.less.modifyVars({
      '@primary-color': value,
    });
  } else {
    console.warn(`未能改变主题颜色: ${value}, 可能是 less 未能正确加载`);

  }
}

export {
  init,
  changeTheme,
}