import React, { useState, useEffect } from 'react';
import { query, update } from 'zero-element/lib/utils/request';
import { formatAPI } from 'zero-element/lib/utils/format';
import ZEle from 'zero-element';
import global from 'zero-element/lib/config/global';

import { Layout, Button } from 'antd';
import Details from '@/components/Details';
import TitleContent from '@/components/TitleContent';
import relationalModelTablesConfig from './relationalModel-tables/config';

const { Content } = Layout;
const { goBack } = global;

export default ({ location }) => {

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(_ => {
        fetchData()
    }, [location.query.id]);

    function fetchData() {
        const api = formatAPI('/api/apicode/apiRelationModel/apiRelationModels/[id]', {
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
                <TitleContent title="关系模型信息">
                    <Details
                        className="ZEleA-Layout-Content"
                        namespace="relational-model-detail"
                        data={data}
                        loading={loading}
                        fields={[
                            { label: '关系模型名称', field: 'modelName' },
                            { label: '模型标题', field: 'name' },
                            {
                                label: '业务关系', field: 'relationship',
                                theme: "option",
                                options: {
                                    map: {
                                        ONE: "单表",
                                        ONEMANY: "一对多",
                                        MANYMANY: "多对多 ",
                                        CATEGORY: "实体层次分类"
                                    }
                                }
                            },
                            { label: '描述', field: 'notes' }
                        ]}
                    />
                    <Button onClick={goBack}>返回</Button>
                </TitleContent>
                
          <TitleContent title="关系">
           <ZEle
             namespace="relational-model-tables"
             forceInitList={location.query.id}
             config={relationalModelTablesConfig}
           />
         </TitleContent>

            </Content>
        </Layout >
    );
}
