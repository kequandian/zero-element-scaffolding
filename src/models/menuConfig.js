/* eslint-disable no-unused-vars */

import { createModel } from 'zero-element/lib/Model';
import { query, post, update, remove } from 'zero-element/lib/utils/request';
import { formatAPI } from 'zero-element/lib/utils/format';
import { getToken } from 'zero-element/lib/utils/request/token';

const sleep = ms => new Promise(res => setTimeout(_ => res(), ms));

createModel({
  namespace: 'menuConfig',
  state: {
    menuTree: null,
  },
  effects: {
    setMenuTree(tree) {
      // this.menuTree = formatPerms(tree);
      this.menuTree = tree;
    },
    clearMenuTree() {
      this.menuTree = [];
    },
    queryPerm: async function () {
      if (getToken()) {
        if (!this.menuTree || Array.isArray(this.menuTree)) {
          query('/api/crud/menu/custom/test')
            .then(response => {
              console.log('response = ', response)
              if (response.status === 200) {
                console.log('response = ', response)
                // const { perms } = response.data.data;
                // this.setMenuTree(perms);
              }
            })
            .catch(_ => {
              return sleep(5000).then(_ => {
                this.clearMenuTree();
              })
            })
        }
      } else {
        sleep(5000).then(_ => {
          this.clearMenuTree();
        })
      }
    },
    getMenuTree() {
      if (!this.menuTree || Array.isArray(this.menuTree)) {
        return {};
      }
      return this.menuTree;
    }
  },
  useDefault: false,
});

function formatPerms(perms) {
  const permsObj = {};

  if (!Array.isArray(perms)) {
    console.warn('非预期的权限数据格式: ', perms);
  } else {
    const permsFlat = arrayFlat(perms);
    permsFlat.forEach(perm => {
      permsObj[perm.identifier] = true;
    });
  }
  return permsObj;
}

function arrayFlat(arr) {
  const stack = [...arr];
  const rst = [];

  while (stack.length) {
    const item = stack.shift();
    if (Array.isArray(item.perms)) {
      stack.push(...item.perms);
    }
    rst.push(item);
  }

  return rst;
}