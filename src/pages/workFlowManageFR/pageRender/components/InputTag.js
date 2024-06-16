import React from 'react'
import '../public/index.less'
export default function InputTag(props){
    const {
        number=0,
        maxlength
    }=props
    return <div className="InputTag">
        {maxlength?number+"/"+maxlength:number}
    </div>
}