import React from 'react'
import { Typography, Button, Modal, Alert } from 'antd';
import { WarningOutlined } from '@ant-design/icons';

function DelModal({ closeDelModal, handleDelete, isModalDelVisible, ...item }) {

    const AlDesc = "Deleting a location might impact the users' configuration and leave information (e.g. the initial brought forward days)."

    return (
        <Modal
            closable
            onCancel={closeDelModal}
            okText="Yes, Delete"
            title="Delete Location"
            maskStyle={{ background: "#242C48", opacity: "0.3" }}
            width={460}
            visible={isModalDelVisible}
            footer={<Button
                type='primary'
                style={{ borderRadius: "6px" }}
                danger
                onClick={() => handleDelete(item.id)}
            >Yes, Delete</Button>}>
            <Typography.Text
                className='del-modal-typography'
            >
                {`Are you sure want to delete ${item.title} Location? `}
            </Typography.Text>
            <Alert
                description={AlDesc}
                style={{ background: "white", border: "white" }}
                type="warning"
                showIcon
                icon={<WarningOutlined style={{ color: 'red' }} />}
            />
        </Modal>
    )
}

export default DelModal