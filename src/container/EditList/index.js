import React,{useState,useEffect,useRef} from 'react';
import { withRouter, history } from 'umi';
// import { Space, Button } from 'antd';
import { Drawer,Button,message,Empty,Spin } from 'antd';
import { useDidMount } from 'zero-element/lib/utils/hooks/lifeCycle'
import './public/index.less'
import promiseAjax from '@/utils/promiseAjax';
import {AddSvg, DeleteSvg, Edit} from './svg'
import ShowModal from './components/showModal';
import OneMany from './components/oneMany';
import { get as getEndpoint } from 'zero-element/lib/utils/request/endpoint';
import _, { set } from 'lodash'
import {
  fieldModelConfig

} from './config/pageConfig'
import FormTools from './components/Form';
export default withRouter(function EditList(props) {
  const {config} = props
  const { 
    api="/api/crud/fields/fieldses",
    ModelConfig=fieldModelConfig,
    title,
    field,
    PageId="",
    projectId="",
    name="",
    NoModal=false,
    showAdd=true,
    showDelete=true,
    svg=<Edit/>
  } = config;
  // message.loading("开始加载")
  const addRef = useRef()

  const [visible, setVisible] = useState(false);
  const [loading,setLoading] = useState(true)
  const [data,setData] = useState(null)
  const [itemId,setItemId] = useState(null)
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  // 获取id
  // const [id,setId] = useState(0)
  // let PageId;
  // const getParams = () =>{
  //   var array = window.location.href.split("?");   
  //   if ((parseInt(array.length) - parseInt(1)) > 0) {   
  //        var array1 = array[1].split("&");   
  //        if (array1.length > 0) {   
  //           //  console.log(array1)
  //            for(var i in array1){
  //              console.log(array1[i])
  //              if(array1[i].indexOf("id=")!==-1){
  //              console.log(array1[i].split("id=")[1])
  //              PageId = array1[i].split("id=")[1]
  //              }
  //            }
  //        }   
  //    } 
  // }

  // getParams()

  useDidMount(_ => {
    let endpoint = getEndpoint()
    let apiUrl = ""
    let queryData={}
    if(PageId){
      queryData = {
        pageId:PageId
      };
    }

    console.log(PageId,"PAGEID")
    if(PageId!==""){
      apiUrl = `${endpoint}${api}`;
    }else{
      apiUrl = `${endpoint}${api}/${projectId}`
    }
    // const apiUrl = `/api/test`;

    promiseAjax(apiUrl, queryData)
      .then(resp => {
        if (resp && resp.code === 200) {
          const Listdata = resp.data;
          // message.success("加载成功")
          if(PageId!==""){
            setData(Listdata.records)
          }else{
            setData(Listdata)
          }
        } else {
          setLoading(false)
          message.error('获取页面配置信息失败')
        }
      }).catch(err=>{
          setLoading(false)
          message.error('获取页面配置信息失败')
      })
  });
  // 增加数据
  function addMessage(){
    let theData;
    let endpoint = getEndpoint()
    const apiUrl = `${endpoint}${api}`;
    let options = {
      method:"POST"
    }
    theData = {
      ...addRef.current.data,
      "pageId":PageId
    }
    // console.log(theData,"提交后的DATA")
    promiseAjax(apiUrl,theData,options)
    .then(resp => {
      if (resp && resp.code === 200) {
        // const Listdata = resp.data.records;
        // console.log(resp)
        message.success("添加成功")
        history.go(0)
        // setData(Listdata)
      } else {
        message.error('添加失败')
      }
    })
  }
  // 删除
  function handleDelete(id){
    message.loading("开始删除")
    let endpoint = getEndpoint()
    console.log(id)
    const apiUrl = `${endpoint}${api}/${id}`;
    let options = {
      method:"DELETE"
    }
    let PutData;
    
    for(var i=0;i<data.length;i++){
      // console.log("I",i)
      if(data[i].id===id){
        // console.log(data[i])
        PutData = data[i]
      }
    }
    promiseAjax(apiUrl,PutData,options)
    .then(resp => {
      if (resp && resp.code === 200) {
        // const Listdata = resp.data.records;
        console.log(resp)
        message.success("删除成功")
        setTimeout(()=>{
          history.go(0)
        },500)
        // setData(Listdata)
      } else {
        message.error('删除失败')
      }
    })
  }
  // 提交更改
  function handleSuccess(id){
    console.log(id)
    let endpoint = getEndpoint()
    let apiUrl = `${endpoint}${api}/${id}`;

    let options = {
      method:"PUT"
    }
    let PutData;
    if(PageId){
      for(var i in data){
        console.log(_.get(data[i],"pageId"),PageId,"ID")
        if(_.get(data[i],"pageId")==PageId){
          PutData = data[i]
          apiUrl = `${endpoint}${api}/${id}`;
          console.log(PutData)
        }
      }
    }else{
      PutData=data
    }
    console.log(data,"DATA")
    promiseAjax(apiUrl,PutData,options)
    .then(resp => {
      if (resp && resp.code === 200) {
        // const Listdata = resp.data.records;
        // console.log(resp)
        message.success("更改成功")
        history.go(0)
        // setData(Listdata)
      } else {
        message.error('更改失败')
      }
    })
  }
  return <div className="Drawer-edit-box">
  <Button onClick={showDrawer} className="edit-box" icon={svg}>
  </Button>
  <Drawer
    title = {"编辑"+name}
    placement = "right"
    closable = {false}
    onClose = {onClose}
    visible = {visible}
    width="300"
  >
        {data?Array.isArray(data)?data.map((item,i)=><>
          <ShowModal title={_.get(item,title)||"组件无名称"}
              titleLabel={title}
              field={_.get(item,field)||"空"}
              fieldLabel={field}
              type="card"
              onSuccess={()=>handleSuccess(item.id)}
            >
              <FormTools
                formData={item}
                config={ModelConfig}
              ></FormTools>
            </ShowModal>
            {showDelete?<div style={{cursor:"pointer",fontWeight:"bolder",position:"relative",height:"50px",lineHeight:"50px",float:"right",top:"-50px",right:"20px"}} onClick={()=>handleDelete(item.id)}><DeleteSvg/>删除</div>:null}
        </>):NoModal?<>
              <FormTools
                formData={data}
                config={ModelConfig}
              ></FormTools>
              <Button type="primary" style={{"float":"right"}} onClick={()=>handleSuccess(projectId)}>提交</Button>
              <Button style={{"float":"right",marginRight:"5px"}} onClick={()=>onClose()}>取消</Button>
      </>:<div><>
          <ShowModal title={_.get(data,title)||"组件无名称"}
              titleLabel={title}
              field={_.get(data,field)||"空"}
              fieldLabel={field}
              type="card"
              onSuccess={()=>handleSuccess(projectId)}
            >
              <FormTools
                formData={data}
                config={ModelConfig}
              ></FormTools>
            </ShowModal>
            {showDelete?<div style={{cursor:"pointer",fontWeight:"bolder",position:"relative",height:"50px",lineHeight:"50px",float:"right",top:"-50px",right:"20px"}} onClick={()=>handleDelete(PageId)}><DeleteSvg/>删除</div>:null}
        </>
        

        </div>:<Spin spinning={loading}>
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
          </Spin>
          }
          {showAdd?<ShowModal title={"添加"+name}
          icon={<AddSvg/>}
              onSuccess={addMessage}
            >
              <FormTools
                config={ModelConfig}
                ref={addRef}
              ></FormTools>
            </ShowModal>:null }
  </Drawer>
  </div>
}
)