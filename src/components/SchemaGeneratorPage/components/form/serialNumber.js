import {Tag} from 'antd'
export default function(){
    var date = new Date();
    const Y = date.getFullYear(); 
    const M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1);
    const D = (date.getDate() < 10 ? '0'+(date.getDate()) : date.getDate()); 

    return <Tag className="_tag_color_status_processing">ZF{Y+
    M+D
    }01</Tag>
}