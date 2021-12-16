import IBtn from "@/components/ImageButton"
import useBreadcrumb from "@/framework/useBreadcrumb"
import {ReportSvg,DataSvg,PageSvg,FieldSvg, DynamicPageSvg, ApiSvg} from "./public/svg"
export default function (){
    useBreadcrumb([
        { title: '首页', path: '/' },
        { title: '管理员选项'},
    ]);
    // 默认一行四个
    return <div class="FlexBox">
        <IBtn url="/tables/tableField-add" OptionUrl="/tables" color="#00897b" svg={<ReportSvg width="2vw" height="2vw" color="#fff"/>} Title="统计报表" SubTitle="统计报表"></IBtn>
        <IBtn url="/dataService/dataService-add" OptionUrl="/dataService" color="#2196f3" svg={<DataSvg width="2vw" height="2vw" color="#fff"/>} Title="数据服务" SubTitle="数据服务"></IBtn>
        <IBtn url="/pageRender/pageRender-add" OptionUrl="/PageRender/pageRender-View" color="#ffb74d" svg={<PageSvg width="2vw" height="2vw" color="#fff"/>} Title="页面设计" SubTitle="页面设计"></IBtn>
        <IBtn url="/fieldTemplate/fieldTemplate-add" OptionUrl="/fieldTemplate" color="#FB4508" svg={<FieldSvg width="2vw" height="2vw" color="#fff"/>} Title="字段模板" SubTitle="字段模板设计"></IBtn>
        <IBtn url="/dynamicPage/dynamicPage-add" OptionUrl="/dynamicPage" color="#8F3A84" svg={<DynamicPageSvg width="2vw" height="2vw" color="#fff"/>} Title="动态页面" SubTitle="动态页面管理"></IBtn>
        <IBtn url="/adminOptions" OptionUrl="/adminOptions" color="#18B384" svg={<ApiSvg width="2vw" height="2vw" color="#fff"/>} Title="API生成" SubTitle="API自动生成"></IBtn>
</div>
}