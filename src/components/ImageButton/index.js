import './index.less'
import {history} from 'umi'

const OptionSvg = <svg t="1622019428123" className="icon" viewBox="0 0 1066 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7838" width="1.5vw" height="1.5vw"><path d="M533.333333 704c-104.234667 0-183.893333-83.2-183.893333-192s79.658667-192 183.893333-192c104.234667 0 183.893333 83.2 183.893334 192s-79.658667 192-183.893334 192z m0-320c-67.413333 0-122.624 57.6-122.624 128s55.210667 128 122.624 128 122.624-57.6 122.624-128S600.746667 384 533.333333 384z m122.624 640H410.709333c-18.346667 0-30.634667-12.8-30.634666-32V870.4c-24.533333-12.8-49.066667-25.6-67.413334-38.4l-98.133333 64c-12.245333 6.4-30.634667 6.4-42.88-12.8l-122.624-224c-12.245333-19.2-6.101333-38.4 12.288-44.8l98.090667-64v-76.8l-98.133334-64c-18.346667-6.4-24.490667-25.6-12.245333-44.8L171.648 140.8c6.144-12.8 24.533333-19.2 42.922667-6.4l98.090666 64c18.346667-12.8 42.88-32 67.413334-38.4v-128c0-19.2 12.245333-32 30.634666-32h245.248c18.346667 0 30.634667 12.8 30.634667 32V153.6c24.533333 12.8 49.066667 25.6 67.413333 38.4l98.133334-64c12.245333-6.4 30.634667-6.4 42.88 12.8l122.624 224c12.245333 19.2 6.101333 38.4-12.288 44.8l-98.090667 64v76.8l98.133333 64c12.245333 6.4 18.346667 25.6 12.245334 44.8l-122.624 224c-6.144 12.8-24.533333 19.2-42.922667 12.8l-98.090667-64c-18.346667 12.8-42.88 32-67.413333 38.4v121.6c0 19.2-12.245333 32-30.634667 32z m-214.613333-64h183.936v-108.8c0-12.8 6.144-25.6 18.389333-32a386.986667 386.986667 0 0 0 85.845334-51.2 37.632 37.632 0 0 1 36.778666 0l91.946667 57.6 91.946667-166.4-91.946667-57.6c-12.245333-12.8-18.389333-25.6-12.245333-38.4 0-19.2 6.101333-32 6.101333-51.2 0-19.2 0-32-6.101333-51.2 0-12.8 6.101333-25.6 12.245333-32L950.186667 371.2l-91.946667-166.4-91.946667 57.6a37.632 37.632 0 0 1-36.778666 0 386.986667 386.986667 0 0 0-85.845334-51.2c-12.245333-12.8-18.346667-25.6-18.346666-38.4V64h-183.936v108.8c0 12.8-6.144 25.6-18.389334 32A386.986667 386.986667 0 0 0 337.152 256a37.632 37.632 0 0 1-36.778667 0L208.426667 204.8 116.48 371.2l91.946667 57.6c12.245333 6.4 18.389333 19.2 12.245333 32 0 19.2-6.101333 32-6.101333 51.2 0 19.2 0 32 6.101333 51.2 6.144 12.8 0 25.6-12.245333 32L116.48 652.8l91.946667 166.4 91.946666-57.6a37.632 37.632 0 0 1 36.778667 0c24.533333 19.2 55.168 38.4 85.845333 51.2a35.413333 35.413333 0 0 1 18.346667 32v115.2z" fill="#fff" p-id="7839"></path></svg>

export default function ImageButton(props) {  
    const {
      image,
      color="#67243f",
      svg,
      Title="标题",
      SubTitle="副标题",
      url,
      OptionUrl
    }=props

    const handClick = () =>{
      history.push(url)
      window.location.href=""
    }

    const OptionClick = () =>{
      history.push(OptionUrl)
      window.location.href=""
    }

    return <>
      <div className="ImageBox" >
        <div className="ImageButton" style={{background:image?`url(${image}) 100% 100%`:color}}>
          <div onClick={handClick}>
            <p className="ImageButton Title">{svg}<span style={{position: "relative",top: "-7px"}}>{Title}</span></p>
            <p className="ImageButton SubTitle">{SubTitle}</p>
          </div>
          <div className="Option" onClick={OptionClick}>{OptionSvg}</div>
        </div>
      </div>
    </>
}