
import { getToken } from 'zero-element/lib/utils/request/token';

export default (url, data, options = {}) => {
    const { method = 'GET', async = true, token = getToken(), AccessKey } = options;
  
    let param = '';
    let payload = {};
    if (method === 'GET') {
      if(data && JSON.stringify(data) != "{}"){
        param = `?${Object.keys(data).map(key => `${key}=${data[key]}`).join('&')}`;
      }
    } else {
      if (data) {
          payload = JSON.stringify(data);
      }
    }
  
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open(method, `${url}${param}`, async);
      xhr.responseType = 'JSON';

      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      
      if(token){
        xhr.setRequestHeader("Authorization", `Bearer ${token}`);
      }

      if(AccessKey){
        xhr.setRequestHeader("Accept", "application/json, text/plain, */*");
        xhr.setRequestHeader("AccessKey", `${AccessKey}`);
      }
  
      xhr.onreadystatechange = () => {
  
        if (xhr.readyState !== 4) {
          return;
        }
  
        let result;
        if (xhr.readyState === 4 && xhr.status === 200) {
          try {
            result = JSON.parse(xhr.responseText);
            let newData = result
            if(!result.code){
              newData = {
                code: xhr.status,
                data: result
              }
            }
            resolve(newData);
  
          } catch (error) {
            reject("返回的数据非 json 格式");
          }
        } else {
          result = xhr.responseText ? JSON.parse(xhr.responseText) : '';
          resolve(result);
        }
      }
      xhr.onerror = (err) => {
        reject(err);
      }
  
      xhr.send(payload);
    })
} 