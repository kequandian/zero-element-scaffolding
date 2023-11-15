/** 2021-6-29 新方法
 *  将原先旧方法做了更改，添加了endpoint节点，能够通过query来进行列表API获取传值的判断
 */
import { query, post, update, remove, download } from 'zero-element/lib/utils/request';
import { message as msg } from 'antd';
import { get as getEndpoint } from 'zero-element/lib/utils/request/endpoint';
const endpoint = getEndpoint()
const methodMap = {
  'get': query,
  'post': post,
  'put': update,
  'delete': remove,
  'download': download
};
let loading = false
export default function onRequest(props) {
  const {
    options,
    record
  } = props;
  const {
    API,
    method = 'get',
    message = '操作成功',
    fileNameField,
    data = {},
    query = {
      id: 'id'
    }
  } = options;
  const match = methodMap[method];
  Object.keys(query).forEach(toKey => {
    const formKey = query[toKey];
    data[toKey] = record[formKey] || formKey;
  });

  // console.log(data)

  if(loading){
    msg.warning('请勿重复操作');
    return
  }
  
  loading = true

  return match(endpoint+API, data).then(rsp => {
    loading = false
    const rspData = rsp.data
    if(rspData){
        if(rsp == 200){
            message && msg.success(message);
        }else{
            msg.error(rspData.message)
        }
    }
  }).catch(_ => {
    loading = false
    msg.error(JSON.stringify(_))
  }); // 
}
