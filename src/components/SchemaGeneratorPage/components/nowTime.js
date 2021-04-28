import React from 'react'
export default function () {
    return <div>
        <h1>现在是{new Date().getFullYear()+"年"+new Date().getMonth()+"月"+new Date().getDate()+"日"+new Date().toLocaleTimeString()}</h1>
    </div>
}