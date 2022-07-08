import React from 'react'
import { Menu, Typography } from 'antd';
import { ReactComponent as SetIcon } from "../../icons/settings.svg"
import { ReactComponent as CalIcon } from "../../icons/calendar.svg"
import Icon from '@ant-design/icons';
import styled from 'styled-components';

const SettingsMenuContainer = styled("div")`
background: #F5F9FE;
width:240px;
padding-top:24px;
height:100%;
`;

function SettingsMenu({ collapsed }) {

    const items = [
        { label: 'General', key: '9', icon: <Icon component={SetIcon} className='item-icon-settings' /> },
        {
            label: 'Vacation Manager', key: '10', icon: <Icon component={CalIcon} className='item-icon-calendar' />, children: [
                { label: 'Leave Types', key: '11', }, { label: 'Locations', key: '12' }
            ]
        }
    ];

    return (<>
        {collapsed || <SettingsMenuContainer>
            <Typography.Text
                className='settings-menu-typography'
            >Settings
            </Typography.Text>
            <Menu
                className='settings-menu-style'
                mode="inline"
                items={items}
            />
        </SettingsMenuContainer>}
    </>
    )
}

export default SettingsMenu