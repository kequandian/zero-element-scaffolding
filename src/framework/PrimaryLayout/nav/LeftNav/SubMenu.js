import React,{useState} from 'react';

export default function SubMenu({ selected, title, children }) {
  const classes = [
    'nav-item-container',
    selected ? 'selected' : '',
  ].join(' ');
  const [show,setShow] = useState(false)
  const handleShow=()=>{
    setShow(!show)
    return show
  }

  return <div className={classes}>
    <div className="nav-titleBox" onClick={handleShow}>{title}</div>
    <div style={{display:show?"block":"none"}}>{children}</div>
  </div>
}