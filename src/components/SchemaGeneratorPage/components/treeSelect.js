import { createWidget } from 'form-render'
import {Tree} from 'antd'
export default function () {  
    const treeData = [
        {
          title: '主目录 1',
          key: '0-0',
          children: [
            {
              title: '父级目录',
              key: '0-0-0',
              children: [
                {
                  title: '文件',
                  key: '0-0-0-0',
                },
                {
                  title: '文件',
                  key: '0-0-0-1',
                },
              ],
            },
            {
              title: '父级目录',
              key: '0-0-1',
              children: [
                  {title:'文件', key: '0-0-1-0' }
                ],
            },
          ],
        },
      ];
    const onSelect = () => {
        console.log('selected');
    };
    
    const onCheck = () => {
        console.log('onCheck');
    };
    return (
        <Tree
        checkable
        onSelect={onSelect}
        onCheck={onCheck}
        treeData={treeData}
        />
    )

}
