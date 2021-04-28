import { props } from "../index"
import { Descriptions,Input} from 'antd'
export default function(){
    return <Descriptions title="用户信息">
        <Descriptions.Item label="姓名"><Input {...props}></Input></Descriptions.Item>
        <Descriptions.Item label="电话"><Input {...props}></Input></Descriptions.Item>
        <Descriptions.Item label="邮箱"><Input {...props}></Input></Descriptions.Item>
        <Descriptions.Item label="备注"><Input {...props}></Input></Descriptions.Item>
        <Descriptions.Item label="地址"><Input {...props}></Input></Descriptions.Item>
  </Descriptions>
}