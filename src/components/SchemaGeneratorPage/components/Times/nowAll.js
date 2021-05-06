export default function(){
    return <h1>{new Date().getFullYear()+"年"+new Date().getMonth()+"月"+new Date().getDate()+"日"+new Date().toLocaleTimeString()}</h1>
}