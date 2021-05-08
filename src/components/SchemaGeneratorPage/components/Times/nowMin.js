export default function () {  
    const date = new Date();
    const Y = date.getFullYear(); 
    const M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1);
    const D = (date.getDate() < 10 ? '0'+(date.getDate()) : date.getDate()); 
    const h = date.getHours(); 
    const m = date.getMinutes(); 
    const s = date.getSeconds();
    return <h1>{m}分</h1>
}