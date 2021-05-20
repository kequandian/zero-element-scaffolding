import useBreadcrumb from '@/framework/useBreadcrumb';
import TagView from './TagView'
import {useState} from 'react'
import './index.less'

export default function(){
    useBreadcrumb([
        { title: '首页', path: '/' },
        { title: '设计页',path:'/designpage/design' },
      ]);
      const [nowSelect,setNowSelect] = useState();
      const [isOneMount,setIsOneMount] = useState();
      const [isTwoMount,setIsTwoMount] = useState();
      const [isThreeMount,setIsThreeMount] = useState();
      const [isFourMount,setIsFourMount] = useState();


      const DesignNav = (<>
        <div id="Children1" className={`SelectDesign_children ${isOneMount}`} onClick={event=>OpenTag(event)}>
            Tag
        </div>
        {/* <div id="Children2" className={`SelectDesign_children ${isTwoMount}`} onClick={(event)=>OpenHello(event,2)}>
            Tag
        </div>
        <div id="Children3" className={`SelectDesign_children ${isThreeMount}`} onClick={event=>OpenHello(event,3)}>
            Tag
        </div>
        <div id="Children4" className={`SelectDesign_children ${isFourMount}`} onClick={event=>OpenHello(event,4)}>
            Tag
        </div> */}
      </>)
      
      const Tag = (
          <TagView></TagView>
      )
      const HelloWorld = (
          <h1>hello</h1>
      )
      function AllMountClear(){
          setIsOneMount('');
          setIsTwoMount('');
          setIsThreeMount('');
          setIsFourMount('');
      }
      function OpenTag(event){
        var children = document.getElementsByClassName('SelectDesign_children')
        AllMountClear();
        setNowSelect();
        console.log(children);
        console.log(event.target.id);
        if(event.target.id === "Children1"){
        setIsOneMount('Click');
        setNowSelect(Tag);
        }else{
            AllMountClear();
            setNowSelect();
        }
        return nowSelect,isOneMount;
      }

      function OpenHello(event,index){

        AllMountClear();
        setNowSelect();

        console.log(index)
        if(event.target.id === `Children${index}`){
            switch(index){
            case 2:setIsTwoMount('Click');break;
            case 3:setIsThreeMount('Click');break;
            case 4:setIsFourMount('Click');break;
            }
            setNowSelect(HelloWorld);
        }else{
            AllMountClear();
            setNowSelect();
        }
        return nowSelect,isTwoMount;
      }

      console.log(nowSelect)
      return <div className="Design">
        <div className="SelectDesign">
            {DesignNav}
        </div>
        <div className = "DesignPage">
        {nowSelect}
        </div>
      </div>
}