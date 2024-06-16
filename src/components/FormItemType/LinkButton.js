import React from 'react';
import { Button } from 'antd';
import { history } from 'umi';

/**
 * 
 * @param { 按钮显示文字 } title
 * @param { 网站链接 } linkUrl
 * @param { 本地路由路径 } routePath
 * @param { 传参值匹配的字段 } query
 */

export default (props) => {
  const {
    name,
    props: propsOtp,
    defaultValue,
    value,
    options,
    formdata,
    ...rest
  } = props;

  console.log('defaultValue = ', defaultValue)
  console.log('value = ', value)

  const { title, linkUrl = value, routePath, query={ id:'id'} } = options;

  const handleRouteAction = () => {
    let path = ''
    if(routePath.indexOf('(id)') != -1){
      Object.keys(query).map(key => {
        path = routePath.replace('(id)', formdata[key])
      })
    }
    // console.log('path === ', path)
    history.push(path);
  }

  if(linkUrl){
    return <Button type="link" href={linkUrl} target="_blank" >{title || value}</Button>;
  } else if(routePath){
    return <a href='#' onClick={handleRouteAction}>{value}</a>
  } else {
    return "未设置linkUrl 或 routePath"
  }

}