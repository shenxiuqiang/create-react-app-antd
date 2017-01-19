import React from 'react';
import { Modal, Form, Input } from 'antd';

const FormItem = Form.Item;

const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 12 },
};

const Edit = ({ visible, edit, form: { getFieldDecorator }, hide }) =>
  <Modal
    title={edit.id ? '编辑' : '新增'}
    visible={visible}
    wrapClassName="vertical-center-modal"
    maskClosable={false}
    onOk={() => {}}
    onCancel={hide}
  >
    <Form horizontal>
      <FormItem
        {...formItemLayout}
        label="店铺昵称/淘宝旺旺"
      >
        {getFieldDecorator('goodsBrandName', {
          rules: [{ required: true, message: '请填写品牌名称' }],
        })(
          <Input placeholder="品牌名称" />,
            )}
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="店铺名称"
      >
        {getFieldDecorator('goodsName', {
          rules: [{ required: true, message: '请填写品牌名称' }],
        })(
          <Input placeholder="店铺名称" />,
            )}
      </FormItem>
    </Form>
  </Modal>;


Edit.propTypes = {
  visible: React.PropTypes.bool.isRequired,
  edit: React.PropTypes.object,
  form: React.PropTypes.object,
  hide: React.PropTypes.func,
};

export default Form.create({
  onFieldsChange(props, changedFields) {
    props.onFormChange(changedFields);
  },
  mapPropsToFields(props) {
    return props.edit;
  },
})(Edit);

