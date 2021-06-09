import IBtn from "@/components/ImageButton"
import useBreadcrumb from "@/framework/useBreadcrumb"
import {ReportSvg,DataSvg,PageSvg} from "./public/svg"
export default function (){
    useBreadcrumb([
        { title: '首页', path: '/' },
        { title: '管理员选项'},
    ]);
    // 默认一行四个
    return <div>
        <IBtn url="/tables/tableField-add" OptionUrl="/tables" color="#00897b" svg={<ReportSvg width="2vw" height="2vw" color="#fff"/>} Title="统计报表" SubTitle="统计报表"></IBtn>
        <IBtn url="/dataService/dataService-add" OptionUrl="/dataService" color="#2196f3" svg={<DataSvg width="2vw" height="2vw" color="#fff"/>} Title="数据服务" SubTitle="数据服务"></IBtn>
        <IBtn url="/pageRender/pageRender-add" OptionUrl="/PageRender/pageRender-add" color="#ffb74d" svg={<PageSvg width="2vw" height="2vw" color="#fff"/>} Title="页面设计" SubTitle="页面设计"></IBtn>
</div>
}