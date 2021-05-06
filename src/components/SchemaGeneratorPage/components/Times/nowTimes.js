export default function () {  
    return <h1>
    {new Date().getHours()+"时"+
    new Date().getMinutes()+"分"+
    new Date().getSeconds()+"秒"
        }</h1>
}