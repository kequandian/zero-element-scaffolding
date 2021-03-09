import React, { useRef, useMemo, useState } from 'react';
import { Form } from 'antd';
import { formatAPI } from 'zero-element/lib/utils/format';
import useBaseForm from 'zero-element/lib/helper/form/useBaseForm';
import { useDidMount, useWillUnmount, useForceUpdate } from 'zero-element/lib/utils/hooks/lifeCycle';
import { Spin, Button, message } from 'antd';
import { getFormItem } from 'zero-element-antd/lib/utils/readConfig';
import { Render } from 'zero-element/lib/config/layout';
import global from 'zero-element/lib/config/global';
import useFormHandle from 'zero-element-antd/lib/container/Form/utils/useFormHandle';
import extraFieldType from 'zero-element-antd/lib/container/Form/utils/extraFieldType';
import canPortal from 'zero-element-antd/lib/utils/canPortal';
import { setPageData, getPageData, clearPageData, getHooks } from 'zero-element/lib/Model';

import promiseAjax from '@/utils/promiseAjax';
import { get as getEndpoint } from 'zero-element/lib/utils/request/endpoint';

import TitledBarLayout from '../TitledBarLayout';
import ApproveFrom from './ApproveForm';

import './index.css';

const defaultLabelCol = {
  xs: { span: 8, },
};
const defaultWrapperCol = {
  // xs: { span: 16, },
};
export default function CustomtForm(props) {
  const [form] = Form.useForm();

  const forceUpdate = useForceUpdate();
  const {
    MODAL, namespace, config, extraData = {},
    onClose, onSubmit, extraEl,
    loading: propsLoading,
    forceInitForm,
    footer,
    hooks = {},
    formRef,
    keepData = false, // 卸载 BaseForm 时不销毁 model.formData
  } = props;
  const {
    API = {},
    layout = 'Empty', layoutConfig = {},
    fields: fieldsCfg,
    path,
    goBack: gobackOpt = true,
    footer: footerOpt,
    requestOptions,
    otherProps = {},
  } = config;
  const { layoutType = 'inline' } = layoutConfig; // inline vertical horizontal
  const formProps = useBaseForm({
    namespace,
    modelPath: 'formData',
    extraData,
  }, config);
  const { router, goBack } = global;

  const renderGoBack = extraEl && extraEl.current && goBack;

  const { loading, data, model, handle } = formProps;
  const { onGetData, onFormMap } = getHooks(namespace);
  const pageDataFormData = getPageData(namespace).formData;

  //保存当前表单ID
  const [custActivityId, setCustActivityId] = useState('');

  //新增属性
  const { footerButton = true, submitBtnText = '保存' } = otherProps;

  const initData = useRef({
    ...extraData,
    ...pageDataFormData,
    ...data,
  });

  const {
    onFormatValue,
    handleFormatValue,
    onSaveOtherValue,
    onValuesChange,
    onExpect,
  } = useFormHandle(form, {
    namespace,
    config,
    forceInitForm,
    onGetOne: handleGetData,
  });
  const extraFields = useRef([]);
  const [fields, setFields] = useState(fieldsCfg);
  const { onGetOne, onCreateForm, onUpdateForm, onClearForm } = handle;
  const [canRenderForm, setCanRenderForm] = useState(API.getAPI ? false : true);

  // useMemo(recordDefaultValue, [fields]);
  useDidMount(_ => {
    recordDefaultValue();
    if (API.getAPI) {
      handleGetData();
    }
    if (typeof formRef === 'object') {
      formRef.current = form;
    }
  });

  useWillUnmount(_ => {
    // if (!keepData) {
    if (!keepData || MODAL) {
      onClearForm();
      clearPageData(namespace, 'formData');
    }
  });

  //获取api数据
  function handleGetData() {
    setCanRenderForm(false);
    onGetOne({}).then((response) => {
      const { code, data } = response || {};
      if (code === 200 && data) {
        let formData = data;
        if (typeof onGetData === 'function') {
          formData = onGetData(data);
        }

        initData.current = formData;
        const { extra, images, tags } = formData;
        setPageData(namespace, 'formData', formData);
        form.setFieldsValue({ ...initData.current });

        if (Array.isArray(images) || Array.isArray(tags)) {
          const otherField = [];

          if (Array.isArray(tags)) {
            otherField.push({ lable: '', field: 'tags', type: 'tags' });
          }
          if (Array.isArray(images)) {
            otherField.push({ lable: '', field: 'images', type: 'upload-image' });
          }

          setFields([
            ...fields,
            ...otherField,
          ]);
        }
        if (extra && Array.isArray(extra.items)) {
          setExtraFields(extra.items);
        } else {
          forceUpdate();
        }

        //根据表单ID获取 页面渲染json配置信息
        // console.log('getWorkFlowData = ', data);
        setCustActivityId(data.formType)
        handleGetActivities(data.formType);
      }
    })
      .finally(_ => {
        setCanRenderForm(true);
      })
  }

  //获取表单页面配置数据
  function handleGetActivities(activityId) {
    const getFieldsAPI = API.getFieldsAPI;
    const formatApi = getFieldsAPI.replace('(id)', activityId);

    const apiUrl = `${getEndpoint()}${formatApi}`
    const queryData = {
    }

    promiseAjax(apiUrl, queryData)
      .then(resp => {

        if (resp && resp.code === 200) {
          const data = resp.data;
          if (Array.isArray(data.layoutJson)) {
            setFields([
              ...data.layoutJson
            ])
          }

        } else {
          console.log('获取页面配置信息失败')
        }
      })
  }

  //创建流程
  function handleCreateApply(subData) {
    const createApplyAPI = API.createApplyAPI;
    const formatApi = createApplyAPI.replace('(id)', custActivityId);

    const apiUrl = `${getEndpoint()}${formatApi}`
    const queryData = subData;

    console.log('apiUrl = ', apiUrl)

    promiseAjax(apiUrl, queryData, { method: 'POST' })
      .then(resp => {
        if (resp && resp.code === 200) {
          const data = resp.data;
          console.log('提交申请成功 response = ', data)
          //返回上一页
          window.history.back();
        } else {
          console.log('提交申请失败')
        }
      })
  }

  //根据返回的 extra 信息处理页面json
  function setExtraFields(items) {
    setFields([
      ...fields,
      ...items.map((item, i) => {
        extraFields.current.push(item.attr);
        return {
          label: item.fieldName,
          field: ['extra', 'items', String(i), 'value'],
          type: extraFieldType[item.fieldType] || 'input',
          value: ['extra', 'items', String(i), 'value'],
        }
      }),
    ]);
  }

  function recordDefaultValue() {
    fields.forEach(item => {
      const { field, value } = item;
      if (value !== undefined && initData.current[field] === undefined) {
        initData.current[field] = value;
      }
    });
    form.setFieldsValue({ ...initData.current });
    forceUpdate();
  }

  function handleSubmitForm(values) {
    const extraSubmit = {};
    fields.forEach(field => {
      if (field.type === 'hidden') {
        extraSubmit[field.field] = extraData[field.field] || field.value;
      }
    })
    let submitData = {
      ...extraSubmit,
      ...pageDataFormData,
      ...values,
    };

    // console.log('submitData = ', submitData)
    // return;

    handleFormatValue(submitData);

    // 修改并提交 extra 里面的数据
    if (extraFields.current.length) {
      const extraData = submitData.extra.items;
      submitData.extra.items = pageDataFormData.extra.items;

      extraFields.current.forEach(field => {
        const index = submitData.extra.items.findIndex(item => item.attr === field);
        const find = submitData.extra.items[index];

        if (find) {
          find.value = extraData[index].value;
        }
      });
    }

    if (typeof onSubmit === 'function') {
      onSubmit(submitData, handleResponse);
      return false;
    }

    if (typeof onFormMap === 'function') {
      submitData = onFormMap(submitData, pageDataFormData);
    }

    if (API.updateAPI) {
      onUpdateForm({
        fields: submitData,
        options: requestOptions,
      }).then(handleResponse);
    } else if (API.createApplyAPI) {
      handleCreateApply(submitData);
    } else {
      onCreateForm({
        fields: submitData,
        options: requestOptions,
      }).then(handleResponse);
    }
  }

  function handleResponse(data = {}, opt = {}) {
    const { message: msg = '操作成功' } = opt;
    if (data.code === 200) {
      if (msg) {
        message.success(msg);
      }
      if (onClose) {
        onClose(data);
      }
      if (router) {
        if (path) {
          const fPath = formatAPI(path, {
            namespace,
          });
          router(fPath);
          return false;
        }
      }
      if (!MODAL && gobackOpt && goBack) {
        goBack();
      }
    } else {
      message.error(`操作失败: ${data.message}`);
    }
  }

  function handleGoBack() {
    if (path) {
      const fPath = formatAPI(path, {
        namespace,
      });
      router(fPath);
    } else {
      goBack();
    }
  }

  function handleReset() {
    form.resetFields();
    forceUpdate();
  }

  //保存按钮点击时间
  function renderFooter() {
    function onSubmit() {
      form.submit();
    }

    if (footer !== undefined || footerOpt !== undefined) {
      return footer;
    }

    const classes = MODAL ? 'ant-modal-footer' : 'ZEle-Form-footer';
    return <div className={classes}>
      <Button onClick={handleReset}>重置</Button>
      <Button type="primary" htmlType="submit" onClick={onSubmit}>{submitBtnText}</Button>
    </div>
  }

  function getCurrentProcessSteps(steps) {
    return steps ? steps : [];
  }

  const approveFormProps = {
    loading,
    currentItem: currentInstance,
    intlPrefix: 'workflows.apply.form.',
    onOk: (data) => { handleForm(data) },
    okText: formatMessage('workflows.apply.form.approve'),
    onBack,
    sections: [{  //required
      //title: <FormattedMessage id="title.base" />, //对于不需要多个section的情况，同样可以用sections（不过元素只有1个），此时title不需要设置
      xs: 24, sm: 24, md: 24, //optional(也可以用span) Info组件可以使用，CollapsedInfo组件不需要
      // span: 8, //optional, //Info组件可以使用，CollapsedInfo组件不需要
      fields: [
        {
          name: 'currentStepId',
          disabled: approved === false || getCurrentProcessSteps(currentProcess.steps).length === 0,
          rules: [{ required: true, message: '必须选择转交步骤' }],
          initValFunc: (currentProcess) => currentProcess.selectedStep ? currentProcess.selectedStep.id : undefined,
          component: <RadioGroup
            onChange={(e) => {
              dispatch({
                type: 'workflows/selectStep',
                payload: {
                  id: e.target.value,
                }
              })
            }}
          >
            {((items) => items.map((item, index) =>
              <RadioButton key={item.id} value={item.id}>{item.name}</RadioButton>)
            )(getCurrentProcessSteps(currentProcess.steps))
            }
          </RadioGroup>
        },
        {
          name: 'handleType',
          rules: [{ required: true, message: '必须选择意见' }],
          initValFunc: () => 'approve',
          component: <RadioGroup onChange={handleTypeChange}>
            <RadioButton key="approve" value="approve">同意</RadioButton>
            {/*<RadioButton key="reject" value="reject">不同意</RadioButton>*/}
            {currentInstance.status !== 'START' ?
              <RadioButton key="rollback" value="rollback">回退</RadioButton>
              : null}
          </RadioGroup>
        },
        {
          name: 'note',
          rules: [{ required: true, message: '必须填写意见' }],
          component: <Input.TextArea />
        },
        {
          name: 'uploadFile',
          component: (
            <Upload {...props}>
              <Button>
                <Icon type="upload" /> 点击上传
               </Button>
            </Upload>
          )
        }

      ],
      textFields: [
        {
          name: 'user',
          disabled: approved === false || getCurrentProcessSteps(currentProcess.steps).length === 0,
          validator: () => {
            if (!currentInstance.currentUserName || !currentInstance.currentUserId) {
              message.error('经办人不能为空');
              return false;
            }
            return true;
          },
          component: <SelectStaff
            selectStaffName={currentInstance.currentUserName}
            onSelect={(staff) => {
              dispatch({
                type: 'workflows/updateCurrentInstance',
                payload: {
                  currentUserId: staff.userId,
                  currentUserName: staff.name,
                }
              })
            }}
          />
          // component: <SelectUser
          //               value={currentInstance.currentUserName}
          //               onSelect={(users) => {
          //                 const user = users && users.length > 0 && users[0];
          //                 if (user) {
          //                   dispatch({
          //                     type: 'workflows/updateCurrentInstance',
          //                     payload: {
          //                       currentUserId: user.id,
          //                       currentUserName: user.name,
          //                     }
          //                   })
          //                 }
          //               }}
          //             />
        },
      ]
    },
    ]
  };

  return <Spin spinning={propsLoading || loading}>
    {renderGoBack && canPortal(extraEl, <Button onClick={handleGoBack}>返回</Button>)}
    <div className={fields.length ? 'ant-modal-body' : undefined}>
      {canRenderForm ? (
        <Form
          form={form}
          layout={layoutType}
          labelCol={defaultLabelCol}
          wrapperCol={defaultWrapperCol}
          initialValues={initData.current}
          onValuesChange={onValuesChange}
          onFinish={handleSubmitForm}
        >
          <Render n={layout} {...layoutConfig}>
            {fields.map(field => getFormItem(field, model, {
              namespace,
              form,
              handle: {
                onFormatValue,
                onSaveOtherValue,
                onExpect,
              },
              hooks,
              extraData,
            }))}
          </Render>
        </Form>
      ) : <Form form={form} />}
    </div>

    <TitledBarLayout title={'审批提交信息'}>
      <ApproveFrom {...approveFormProps} />
    </TitledBarLayout>

    {footerButton ? (renderFooter()) : null}
  </Spin>
}