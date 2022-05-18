import React from 'react';
import useBreadcrumb from '@/framework/useBreadcrumb';
import Details from '@/components/Details';
import Content from '@/layouts/Content';
import { Button } from 'antd';
// import { router } from 'umi';
import ImageView from 'zero-element-antd/lib/components/ImageView';

export default function ProductView(props) {

  // const [details, loading] = useDetails('ad', props);

  useBreadcrumb([
    { title: '主页', path: '/' },
    { title: '广告配置' },
    { title: '广告' },

  ]);

  return <Content>
    <Details
      namespace="product_view"
      goBack
      // loading={loading}
      // data={details}
      fields={[

        {
          group: '广告详情',
        },
        { label: '广告名称', field: 'name' },
        { label: '缩略名称', field: 'shortName' },
        { label: '品牌', field: 'brandName' },
       /* {
          label: '品牌logo', value: (
            <a href={details.logo} rel="noopener noreferrer" target="_blank">
              {details.logo}
            </a>
          )
        },*/
        { label: '排序号', field: 'sortOrder' },
        {
          label: '推荐', field: 'promoted',
          map: {
            '1': '是',
            '0': '否',
          }
        },
        {
          label: '分区', field: 'partnerLevelZone',
          map: {
            '1': '零元区',
            '2': '精品区',
            '3': '特价区',
          }
        },
        { label: '价格', field: 'price' },
        { label: '积分', field: 'point' },
        { label: '成本价', field: 'costPrice' },
        { label: '建议售价', field: 'suggestedPrice' },
        { label: '重量(克)', field: 'weight' },
        { label: '体积(立方厘米)', field: 'bulk' },
        {
          label: '状态', field: 'status',
          map: {
            'DRAFT': '草稿',
            'PENDING_APPROVAL': '待审核',
            'APPROVED': '已审核',
            'ONSELL': '上架',
            'OFFSELL': '下架',
          }
        },
        { label: '类别', field: 'categoryName' },
        { label: '产品单位', field: 'unit' },
        { label: '条形码', field: 'barcode' },
        {
          label: '运费模板', value: (
            <Button type="link" onClick={_ => {
              router.push({
                pathname: '/product/freightView',
                query: {
                  id: details.fareId,
                }
              })
            }}>
              {details.fareName}
            </Button>
          )
        },
        {
          label: '参与检查才可购买', field: 'requiredParticipateExam',
          map: {
            '1': '是',
            '0': '否',
          }
        },
        { label: '优惠活动-积分', field: 'credit' },
        {
          label: '优惠活动-优惠券', field: 'allowCoupon',
          map: {
            1: '允许使用',
            0: '不允许使用',
          }
        },


        {
          label: '产品图片', field: 'productImageList',
          align: 'middle',
          valueType:'image'
        },
        {
          label: '海报', field: 'banner',
          align: 'middle',
          valueType:'image'
        },
        {
          group: '描述',
        },
        {
          label: '描述', field: 'description',
          align: 'middle',
          alone:true,
          value: <div dangerouslySetInnerHTML={{__html: details.description}}></div>
        },





      ]}
    />
  </Content>;
}
