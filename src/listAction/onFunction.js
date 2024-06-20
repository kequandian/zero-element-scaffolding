import { message as msg, Modal } from 'antd';
import _ from 'lodash';
import ModalTable from '@/pages/videoManage/deviceList/components/ModalTable';
import styles from './onFunction.less';
export default function onFunction(props) {

  console.log('props==', props)
  return Modal.confirm({
    title: _.get(props, 'options.modalTitle'),
    icon: null,
    width: 800,
    className: styles.function_modal_table,
    content: (
      <ModalTable 
        {...props}
        onBack={() => {
          Modal.destroyAll();
        }}
      />
    )
  })
}
