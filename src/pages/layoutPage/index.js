import React,{useState} from 'react'
import Page from '@/layouts/Page'
import MaskBox from '@/layouts/Mask/MaskBox'
export default function LayoutPage(props){
    const {

    }=props

    const [show,setShow] = useState()
    function handleChange(e){
        console.log(e)
        setShow(!e)
    }
    function handleShow(){
        setShow(true)
    }

    return <>
    {/* Page布局示例 */}
        <Page>
            <div style={{"width":"50px",height:"50px",background:"red"}} onClick={handleShow}>测试</div>
            <div style={{"width":"50px",height:"50px",background:"blue"}}>测试</div>
        </Page>
        {/* MaskBox布局实例 */}
        <MaskBox show={show} theme="big" onChange={handleChange}>
            <div style={{"width":"50px",height:"50px",background:"red"}}>测试</div>
            <div style={{"width":"50px",height:"50px",background:"blue"}}>测试</div>
        </MaskBox>
    </>
}