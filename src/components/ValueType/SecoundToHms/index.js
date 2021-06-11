import React from 'react';
import './index.less'

export default function SecoundToHms(props) {

    // console.log('props = ', props)
    const { data = {}, options = {}, value = '' } = props;
    const { path, query = { id: 'id' }, blank = false, format = 'HH:mm:ss' } = options;

    const { text = '', record } = data;

    const v = text || value;
    if (typeof v === 'string') {
        return v;
    }

    var theTime = text || value ? parseInt(text || value) : 0;// 秒
    var middle = 0;// 分
    var hour = 0;// 小时

    if (theTime >= 60) {
        middle = parseInt(theTime / 60);
        theTime = parseInt(theTime % 60);
        if (middle >= 60) {
            hour = parseInt(middle / 60);
            middle = parseInt(middle % 60);
        }
    }

    if(format === 'HH:mm:ss'){
        return formatHms(hour, middle, theTime);
    } else if(format === '时分秒'){
        return formatHmsUnit(hour, middle, theTime);
    } else {
        return '-';
    }

}


// 00:00:00
function formatHms(hour, middle, theTime){
    if (theTime) {
        if (theTime > 0 && theTime < 10) {
            theTime = `0${theTime}`;
        }
    } else {
        theTime = '00'
    }

    if (middle) {
        if (middle > 0 && middle < 10) {
            middle = `0${middle}`;
        }
    } else {
        middle = '00'
    }

    if (hour) {
        if (hour > 0 && hour < 10) {
            hour = `0${hour}`;
        }
    } else {
        hour = '00'
    }
    return `${hour}:${middle}:${theTime}`;
}

//00时00分00秒
function formatHmsUnit(hour, middle, theTime){

    let v = '';

    if (hour > 0 ) {
        v = `${hour}时`
    } 

    if (middle > 0) {
        v = `${v}${middle}分`
    } 
    
    if (theTime) {
        v = `${v}${theTime}秒`
    } 

    if(!hour && !middle && !theTime){
        v = '-'
    }
    
    return v;
}

function hmsToSecound(e) {
    var time = e;
    if(!e){
        return;
    }
    var len = time.split(':')
    if (len.length == 3) {
        var hour = time.split(':')[0];
        var min = time.split(':')[1];
        var sec = time.split(':')[2];
        return Number(hour * 3600) + Number(min * 60) + Number(sec);
    }
    if (len.length == 2) {
        var min = time.split(':')[0];
        var sec = time.split(':')[1];
        return Number(min * 60) + Number(sec);
    }
    if (len.length == 1) {
        var sec = time.split(':')[0];
        return Number(sec);
    }

    // var hour = time.split(':')[0];
    // var min = time.split(':')[1];
    // var sec = time.split(':')[2];
    // return  Number(hour*3600) + Number(min*60) + Number(sec);
}

export {
    hmsToSecound
}
