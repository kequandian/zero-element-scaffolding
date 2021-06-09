import React,{useRef} from 'react'
import ReactDOM from 'react-dom'
import {Config} from './config/add-config'
import {JSONInput} from './components/JSONInput'
import {Flex,FlexChild} from './layout/flex'
import './public/index.less'
import {Sumbit} from './components/Sumbit'
import Button from './components/Button'
import getData from './components/getData'
function PageRenderAdd(){
    const JSONRef = useRef()

    const handleChange= ()=>{
        console.log(JSONRef.current.value);
    }

    const handleInputChange= (e)=>{
        console.log(e.target.value);
    }

    const handleClick = () =>{
        <getData API="" field=""></getData>
    }

    return <Flex flex="2">
        <FlexChild>
            <JSONInput defaultValue={`{
}`} onChange={handleChange} ref={JSONRef} {...Config.textarea}></JSONInput>
        </FlexChild>
        <FlexChild>
            <Sumbit Version={Config.Version} onChange={(e)=>handleInputChange(e)}></Sumbit>
            <Button text="保存" onClick={handleClick}></Button>
        </FlexChild>
    </Flex>
}
ReactDOM.render(<PageRenderAdd/>,document.getElementById("root"))