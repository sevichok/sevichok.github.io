import React from 'react'
import { Typography, Space } from 'antd';
import Icon from '@ant-design/icons';
import styled from 'styled-components';

import MenuIcon from "../../icons/icon.svg"
import Dashboard from "../../icons/home.svg"
import Users from "../../icons/group.svg"
import Settings from "../../icons/settings.svg"
import PL from "../../icons/folder.svg"
import VacationManager from "../../icons/calendar.svg"

import NotificationIcon from "../../icons/notfications-empty.svg"
import JSIcon from "../../icons/Avatar.svg"

const MenuElement = styled('div')`
display:flex;
flex-direction:column;
justify-content:center;
gap:8px;
`

const SiderMenuContainer = styled("div")`
padding: 24px 15px;
text-align: center;
background: #F5F9FE;
height: 768px;
width:100px;
display: flex;
flex-direction: column;
justify-content: space-between;
`

function SiderMenu() {
    return (<SiderMenuContainer>
        <div>
            <Icon component={() => <img src={MenuIcon} alt="icon" className='icon' />} />
            <Space
                direction="vertical"
                size="middle"
                className='sider-menu-space'
            >
                <MenuElement className='icon'>
                    <Icon component={() => <img src={Dashboard} alt="dashicon" />} />
                    <Typography.Text className='sider-menu-space-typography'>Dashboard</Typography.Text>
                </MenuElement>
                <MenuElement className='icon'>
                    <Icon component={() => <img src={Users} alt="usersicon" />} />
                    <Typography.Text className='sider-menu-space-typography'>Users</Typography.Text>
                </MenuElement>
                <MenuElement className='icon'>
                    <Icon component={() => <img src={Settings} alt="settingsicon" />} />
                    <Typography.Text className='sider-menu-space-typography'>Settings</Typography.Text>
                </MenuElement>
                <MenuElement className='icon'>
                    <Icon component={() => <img src={PL} alt="plicon" />} />
                    <Typography.Text className='sider-menu-space-typography'>P&L</Typography.Text>
                </MenuElement>
                <MenuElement className='icon'>
                    <Icon component={() => <img src={VacationManager} alt="menuicon" />} />
                    <Typography.Text className='sider-menu-space-typography'>Vacation Manager</Typography.Text>
                </MenuElement>
            </Space>
        </div>
        <div>
            <Icon style={{ width: "70px" }} component={() => <img src={NotificationIcon} alt="noticon" className='icon' />} />
            <Icon style={{ width: "70px", paddingTop: "24px" }} component={() => <img src={JSIcon} alt="jsicon" className='icon' />} />
        </div>
    </SiderMenuContainer >
    )
}

export default SiderMenu