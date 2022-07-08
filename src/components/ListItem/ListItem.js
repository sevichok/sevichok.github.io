import React, { useState } from 'react'
import styled from 'styled-components'
import { Typography, Space, Popover, Avatar, Tooltip, Dropdown, Menu, Button } from 'antd';
import { EllipsisOutlined, DeleteOutlined, StarOutlined, EditOutlined } from '@ant-design/icons';
import { PoliciesContent } from "./Constants"
import DelModal from '../DelModal/DelModal';

const ListItemContainer = styled('div')`
background: white;
border-radius:6px;
width:304px;
height:173px;
display:flex;
flex-direction:column;
padding:20px 20px;
gap:16px;
border: 0.7px #AFB6C666 solid;
`

function ListItem({ list, handlePickDefault, handleDelete, ...item }) {
    const [isModalDelVisible, setIsModalDelVisible] = useState(false);
    const openDelModal = () => { setIsModalDelVisible(true) }
    const closeDelModal = () => { setIsModalDelVisible(false) }

    const dropItems = [{ label: (<Typography.Text onClick={openDelModal}>Delete</Typography.Text>), key: "deleteItem", icon: <DeleteOutlined /> },
    { label: (<Typography.Text>Edit</Typography.Text>), key: "editItem", icon: <EditOutlined /> },
    item.isDefault || { label: (<Typography.Text onClick={() => handlePickDefault(item.id)}>Set as Default</Typography.Text>), key: "defaultItem", icon: <StarOutlined /> }]

    return (
        <ListItemContainer>
            <div className='list-item-container-main-div-style'>
                <Typography.Text
                    className='location-label'
                >{item.title}
                </Typography.Text>
                {item.isDefault && <Button
                    style={{fontSize:"12px",fontWeight:"600", lineHeight:"14px"}}
                    type='primary'
                    size='small'
                    shape='round'
                >default</Button>}
                <Dropdown
                    placement="bottomRight"
                    overlay={(<Menu selectable items={dropItems}></Menu>)}
                >
                    <div className='location-label-del-div'>
                        <EllipsisOutlined
                            className='location-label-del-div-icon'
                            rotate={90} />
                    </div>
                </Dropdown>
            </div>
            <DelModal
                closeDelModal={closeDelModal}
                handleDelete={handleDelete}
                isModalDelVisible={isModalDelVisible}
                {...item}
            />
            <Space direction='horizontal' size={"middle"} >
                <Space
                    className='location-list-item-space'
                    direction='vertical'
                >
                    <Typography.Text className='location-list-item-text'>Holidays</Typography.Text>
                    <Typography.Text className='location-list-item-text'>Leave Policies</Typography.Text>
                </Space>
                <Space
                    className='location-list-item-space'
                    direction='vertical'
                >
                    <Popover
                        className='location-list-item-popover'
                        content={item.days.join(", ")}
                        title="View Holidays"
                        trigger="click"
                    >View Holidays</Popover>
                    <Popover
                        className='location-list-item-popover'
                        content={PoliciesContent(item)}
                        title="View Leave Policies"
                        trigger="click"
                    >View Leave Policies</Popover>
                </Space>
            </Space>
            <Avatar.Group maxCount={7}>
                {item.friendsList.map((item, index) => <Tooltip
                    key={item.value}
                    title={item.label}
                >
                    <Avatar src={`https://joeschmoe.io/api/v1/${index + 1}`} />
                </Tooltip>)}
            </Avatar.Group>
        </ListItemContainer>
    )
}

export default ListItem