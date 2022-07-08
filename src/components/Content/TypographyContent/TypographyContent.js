import React from 'react'
import { Space, Typography, Button } from 'antd';

function TypographyContent({ list, showModal }) {
    return (
        <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between' }}>
            <Space direction="vertical">
                <Typography.Text
                    className='typography-content-first-text'
                >Locations</Typography.Text>
                <Typography.Text
                    className='typography-content-second-text'
                >Create new users or update the existng users.You can then set their permissons here too.
                </Typography.Text>
            </Space>
            {list.length === 9 || <Button
                onClick={showModal}
                className="typography-content-button-style"
                type="primary"
            >Create Location</Button>}
        </div>
    )
}

export default TypographyContent