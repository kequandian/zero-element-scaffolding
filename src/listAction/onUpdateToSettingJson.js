import { message as msg } from 'antd';
import { get as getEndpoint } from 'zero-element/lib/utils/request/endpoint';
import promiseAjax from '@/utils/promiseAjax';
const endpoint = getEndpoint()

let loading = false
export default function onDownloadPage(props) {
  const {
    options,
    record
  } = props;
  const {
    API:{
      getAPI='',
      updateAPI=''
    },
    toConfigAPI='/toconfig',
    message = '操作成功',
    query = {
      id: 'id'
    }
  } = options;

  if(loading){
    msg.warning('请勿重复操作');
    return
  }
  
  loading = true
  
  Object.keys(query).forEach(toKey => {
    const formKey = query[toKey];
    query[toKey] = record[formKey];
  });

  // console.log(data)
  
  function getPageConfig() {
    let endpoint = getEndpoint()
    const apiUrl = `${endpoint}${toConfigAPI}`; //转换地址
    const pageUrl = `${endpoint}${getAPI}`;
    promiseAjax(pageUrl, {/* id:id */ })
      .then(resp => {
        if (resp && resp.code === 200) {
          const Listdata = resp.data;

          let options = {
            method: "post"
          }
          promiseAjax(apiUrl, Listdata, options)
            .then(value => {
              // console.log(value,"VALUE")
              if (value.code === 200) {
                const rspData = value.data;
                console.log(' 页面配置信息 = ', rspData)
                handlePostSettingJsonData(rspData)
              } else {
                loading = false
                msg.error('获取页面配置信息失败')
              }
            })
            .catch(value => {
              loading = false
            })
        } else {
          loading = false
          msg.error('获取页面配置信息失败')
        }
      }).catch(err => {
        loading = false
        msg.error('获取页面配置信息失败 = ', err)
      })
  }

  function handlePostSettingJsonData(settingJson) {
    const apiUrl = `${getEndpoint()}${updateAPI}`; 
    let options = {
      method: "post"
    }
    const queryData = {
      ...query,
      setting: settingJson
    }
    return promiseAjax(endpoint+ apiUrl, queryData, options)
    .then(value => {
      if (value.code === 200) {
        msg.info('数据处理完成')
      } else {
        msg.error(`数据处理失败: ${value.message}`)
      }
    })
    .catch(value => {
      msg.error('数据处理失败')
    })
  }



  return getPageConfig(); 
}
