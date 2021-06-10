import React from 'react'
import { ExitSvg, MoveSvg } from '../public/svg'
import "../public/index.less"
export default function PhoneTag(){
    return <div className="PhoneTag">
        <MoveSvg/>
        <ExitSvg/>
    </div>
}