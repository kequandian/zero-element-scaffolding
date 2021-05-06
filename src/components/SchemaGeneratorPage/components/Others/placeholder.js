import { Tooltip } from "antd";
export default function () {  
    const Tiptext = "点击提示文字"
    return <Tooltip title={"提示文字"}>
        {Tiptext}
    </Tooltip>
}