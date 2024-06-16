import React from 'react';
import { Button } from 'antd';
import ZEle from 'zero-element';
import config from './config';
import global from 'zero-element/lib/config/global';

export default (props) => {

    const { location } = props

    const { id } = location.query;

    const { goBack } = global;
    
    function handleGoBack () {
        goBack()
    }

    if(id){
        const title = config.title
        config.title = ''
        return (
            <div className="ZEleA-Layout-Content" style={{padding: '16px 0 0 0', marginBottom: '0'}}>
                <div style={{ 
                    display:'flex', 
                    flexDirection:'row', 
                    justifyContent: 'space-between', 
                    borderBottom: '1px solid #666',
                    padding: '0 0 12px 0',
                    margin: '0 16px 0 16px'
                }}>
                    <div style={{ color: 'rgba(0, 0, 0, 0.85)', fontSize: '1.5em', fontWeight: 500 }}>
                        {title}
                    </div>
                    <Button onClick={handleGoBack}>返回</Button>
                </div>
                <ZEle namespace="contractManage" config={config} />
            </div>
        )
    }else{
        return <ZEle namespace="contractManage" config={config} />
    }


}

