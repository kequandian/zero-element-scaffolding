import { getUserName } from 'zero-element/lib/utils/request/token';
export default function() {  
    if(getUserName()===""){
        return <h1>未获取到用户名，请检查是否已经登录</h1>
    }else{
        return <h1>{getUserName()}</h1>
    }
}