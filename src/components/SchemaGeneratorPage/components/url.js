import {props} from '../index'
import { Input } from 'antd';
export default function(){
    return<Input addonBefore="http://" addonAfter=".com" {...props} />;
}