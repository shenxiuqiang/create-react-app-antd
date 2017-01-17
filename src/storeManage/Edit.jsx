import React from 'react';
import { Modal } from 'antd';

const Edit = () =>
  <Modal
    title="Title of the modal dialog"
    wrapClassName="vertical-center-modal"
    visible={false}
    onOk={() => {}}
    confirmLoading
    onCancel={() => {}}
  >
    <p>123</p>
  </Modal>;

export default (Edit);

