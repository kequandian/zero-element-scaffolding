import React, { useState, useEffect } from 'react';
import { query, update } from 'zero-element/lib/utils/request';
import { formatAPI } from 'zero-element/lib/utils/format';
import ZEle from 'zero-element';
import global from 'zero-element/lib/config/global';

import { Layout, Button } from 'antd';
import Details from '@/components/Details';
import TitleContent from '@/components/TitleContent';
import bindingFieldConfig from './tableModal-bindingField/config';
import bindingSubTableConfig from './tableModal-bindingSubTable/config';

const { Content } = Layout;
const { goBack } = global;

export default ({ location }) => {
  
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(_ => {
    fetchData()
  }, [location.query.id]);

  function fetchData() {
    const api = formatAPI('/api/crud/apicode/apiTableModel/apiTableModels/[id]', {
      namespace: 'table-modal',
    });
    setLoading(true);
    query(api).then(rsp => {
      const { code, data } = rsp.data
      setLoading(false);
      setData(data);
    });
  }

  return (
    <Layout>
        <Content> 
        <TitleContent title="表模型信息">
           <Details
             className="ZEleA-Layout-Content"
             namespace="table-modal-detail"
             data={data}
             loading={loading}
             fields={[
               { label: '名称', field: 'name' },
               { label: '模型名', field: 'modelName' },
               { label: '描述', field: 'note' }
             ]}
           /> 
           <Button onClick={goBack}>返回</Button>

         </TitleContent>

         <TitleContent title="表模型字段">
           <ZEle
             namespace="table-model-fields"
             forceInitList={location.query.id}
             config={bindingFieldConfig}
           />
         </TitleContent>

          <TitleContent title="关联子表">
           <ZEle
             namespace="table-model-sub-tables"
             forceInitList={location.query.id}
             config={bindingSubTableConfig}
           />
         </TitleContent>

       </Content>
    </Layout >
  );
}
