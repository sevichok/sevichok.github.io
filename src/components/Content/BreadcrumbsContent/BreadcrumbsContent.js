import React from 'react'
import { Breadcrumb } from 'antd';
import Icon, { RightOutlined } from '@ant-design/icons';
import Setting from "../../../icons/setting.svg";

function BreadcrumbsContent() {
    return (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <Icon component={() => <img src={Setting} alt="icon" className='icon' width={"14px"} />} />
            <Breadcrumb className='breadcrumbs-style' separator={<RightOutlined className='ant-breadcrumb-separator-icon' />}
            >
                <Breadcrumb.Item>Settings</Breadcrumb.Item>
                <Breadcrumb.Item style={{ color: "#00A0EC" }}>Vacation Manager</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}

export default BreadcrumbsContent