import { getUserName } from 'zero-element/lib/utils/request/token';
export default function() {  
    return <h1>{getUserName()}</h1>
}