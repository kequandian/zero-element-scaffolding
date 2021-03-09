// import React from 'react';
// import { FormattedMessage } from 'react-intl';
// import { Form, Input, InputNumber, Row, Col, DatePicker, Tag, Button } from 'antd';
// import moment from 'moment';

// const FormItem = Form.Item;
// const dateTimeFormat = "YYYY-MM-DD HH:mm:ss";
// const styles = {
//   btn: { marginRight: '10px' }
// };
// const formItemLayout = {
//   labelCol: {
//     span: 8,
//     push: 0,  //传入参数push，表示表单向又偏移 
//     pull: 0,
//   },
//   wrapperCol: {
//     span: 10,
//     push: 0,
//     pull: 0,
//   }
// };

// const Info = ({ currentItem, title, onOk, onBack, onPrevious, onCancel, sections, intlPrefix = '',
//   okText = null, backText = null, previousText = null, cancelText = null, rowsMarginTop = '0px',   //负数为每行向上移，正数为向下移
//   loading=false,
//   form: {
//     getFieldDecorator, validateFields, resetFields, getFieldsValue, setFields
//   },
//   showLine=true,
//   isNeedId=false
// }) => {

//   const validators = [];
//   const customizeValidators = [];

//   function handleOk() {
//     customizeValidators.forEach(item => {
//       const { field, func } = item;
//       const rst = func();
//       if (rst !== true) {
//         setFields({
//           [field]: {
//             errors: [new Error(rst)],
//           }
//         });
//       } else {
//         setFields({
//           [field]: {}
//         });
//       }
//     });
//     validateFields(errors => {
//       if (errors) {
//         return;
//       }
//       const data = { ...getFieldsValue() };
//       let validateResult = true;
//       Object.keys(data).map(key => {
//         const validator = validators.find(v => v.field === key);
//         if (validator && validator.validator() === false) {
//           validateResult = false;
//         }
//       });
//       if (validateResult === false) {
//         return;
//       }
//       if(isNeedId){
//         data.id = currentItem.id
//       }
//       onOk(data);
//       resetFields();
//     });
//   }

//   const createSubmitBtn = () => onOk && <Button loading={loading} onClick={handleOk} type='primary' style={styles.btn}>{okText ? okText : '提交'}</Button>;
//   const createBackBtn = () => onBack && <Button onClick={onBack} style={styles.btn}>{backText ? backText : '返回'}</Button>;
//   const createPreviousBtn = () => onPrevious && <Button onClick={onPrevious} style={styles.btn}>{previousText ? previousText : '上一步'}</Button>;
//   const createCancelBtn = () => onCancel && <Button onClick={onCancel} style={styles.btn}>{cancelText ? cancelText : '取消'}</Button>;
//   const createSections = (sections) => {
//     return (sections.map((section, sectionIndex) => {
//       const createSectionTitle = (sectionTitle) =>
//         sectionTitle && <FormItem label={<Tag color="blue">{section.title}</Tag>} {...formItemLayout} colon={false}></FormItem>;

//       const createByTextFields = (sectionTextFields) => sectionTextFields && sectionTextFields.map((textField, textFieldIndex) => {
//         const realFormItemLayout = textField.formItemLayout || formItemLayout;
//         if (typeof (textField) === 'object') {
//           if (textField.disabled === true) {
//             return null;
//           }
//           if (textField.validator) {
//             validators.push({ field: textField.name, validator: textField.validator });
//           }
//           if (textField.customize) {
//             customizeValidators.push({
//               field: textField.name,
//               func: textField.customize,
//             });
//           }

//           return (
//             <FormItem key={`${sectionIndex}-${textFieldIndex}`}
//               style={{ marginTop: rowsMarginTop }}
//               label={<FormattedMessage id={`${intlPrefix}${textField.name}`} />} {...realFormItemLayout}
//               // required={textField.rules}
//               required={textField.required}
//             >
//               {getFieldDecorator(textField.name, {
//                 rules: textField.rules
//               })(
//                 <Input type="hidden" />
//               )
//               }
//               {textField.component}
//             </FormItem>
//           )
//         }
//         return (
//           <FormItem key={`${sectionIndex}-${textFieldIndex}`} style={{ marginTop: rowsMarginTop }}
//             label={<FormattedMessage id={`${intlPrefix}${textField}`} />} {...realFormItemLayout} >
//             {currentItem[textField]}
//           </FormItem>
//         )
//       });

//       const createByFields = (sectionFields) => sectionFields && sectionFields.map((field, fieldIndex) => {
//         const realFormItemLayout = field.formItemLayout || formItemLayout;

//         if (typeof (field) === 'object') {
//           if (field.disabled === true) {
//             return null;
//           }
//           if (field.validator) {
//             validators.push({ field: field.name, validator: field.validator });
//           }
//           if (field.initialValue) {
//             return (
//               <FormItem key={`${sectionIndex}-${fieldIndex}`} style={{ marginTop: rowsMarginTop }}
//                 label={<FormattedMessage id={`${intlPrefix}${field.name}`} />} {...realFormItemLayout}
//                 required={field.required}
//               >
//                 {getFieldDecorator(field.name, {
//                   initialValue: field.initialValue,
//                   rules: field.rules
//                 })(
//                   field.component
//                 )
//                 }
//               </FormItem>
//             )
//           } else {
//             return (
//               <FormItem key={`${sectionIndex}-${fieldIndex}`} style={{ marginTop: rowsMarginTop }}
//                 label={<FormattedMessage id={`${intlPrefix}${field.name}`} />} {...realFormItemLayout}
//                 required={field.required}
//               >
//                 {getFieldDecorator(field.name, {
//                   initialValue: field.initValFunc ? field.initValFunc(currentItem) : currentItem[field.name],
//                   rules: field.rules
//                 })(
//                   field.component
//                 )
//                 }
//               </FormItem>
//             )
//           }
//         } else {
//           return (
//             <FormItem key={`${sectionIndex}-${fieldIndex}`} style={{ marginTop: rowsMarginTop }}
//               label={<FormattedMessage id={`${intlPrefix}${field}`} />} {...realFormItemLayout}
//               required={field.required}
//             >
//               {
//                 getFieldDecorator(field, {
//                   initialValue: currentItem[field]
//                 })(
//                   <Input />
//                 )
//               }
//             </FormItem>
//           )
//         }
//       });

//       return (
//         <Col span={section.span} push={section.push} pull={section.pull} xs={section.xs} sm={section.sm} md={section.md} lg={section.lg} key={`${sectionIndex}`}>
//           {createSectionTitle(section.title)}
//           {createByTextFields(section.textFields)}
//           {createByFields(section.fields)}
//         </Col>
//       )
//     }))
//   };

//   return (
//     <Form layout="horizontal">
//       <Row style={{ paddingTop: '10px' }}>
//         {createSections(sections)}
//       </Row>
//       {showLine?(
//         <div>
//           <hr color="#EEEEEE" />
//           <br />
//         </div>
//       ):(
//         <div></div>
//       )}
      
//       <Row style={{ textAlign: 'center' }}>
//         <Col>
//           {createPreviousBtn()}
//           {createBackBtn()}
//           {createSubmitBtn()}
//           {createCancelBtn()}
//         </Col>
//       </Row>
//     </Form>
//   )
// };

// export default Form.create()(Info);
