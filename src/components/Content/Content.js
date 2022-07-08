import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from "uuid";
import List from '../List';
import BreadcrumbsContent from './BreadcrumbsContent';
import TypographyContent from './TypographyContent';
import LocationModal from '../LocationModal/LocationModal';
import {
  ArrowLeftOutlined,
  ArrowRightOutlined
} from '@ant-design/icons';

import { Row, Col } from 'antd';

const ContentContainer = styled('div')`
padding:24px 40px 24px 16px;
background:white;
height:768px;

.breadcrumbs:hover {
cursor:pointer ;
color: "#00A0EC";
}
`
function LocationContent({ collapsed, handleCollapse }) {
  let keyGen = uuidv4()
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [list, setList] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [checkedValues, setCheckedValues] = useState([])
  const [resetValue, setResetValue] = useState('Accounting Year')
  const [checkExpireDate, setCheckExpireDate] = useState(false)
  const [fiscalDate, setFiscalDate] = useState({ month: "", days: "", weekStarts: "", timezone: "" })
  const [friendsList, setFriendsList] = useState([])
  const [defaultItem, setDefaultItem] = useState(false)

  useEffect(() => { console.log(list) }, [list])

  const handleDelete = (id) => {
    const deletedIndex = list.findIndex(
      (item) => item.id === id
    );
    if (deletedIndex < 0) { return list }
    list.splice(deletedIndex, 1)
    setList([...list]);
  }

  const handlePickDefault = (id) => {
    list.forEach((element) => {
      return element.id === id ? element.isDefault = true : element.isDefault = false
    })
    setList([...list])
  }

  const handleOk = () => {
    setIsModalVisible(false);
    setList(list.concat({
      title: inputValue,
      id: keyGen,
      days: checkedValues,
      resetBase: resetValue,
      checkExpireDate: checkExpireDate,
      dateTiming: fiscalDate,
      friendsList: friendsList,
      isDefault: defaultItem,
    }))
    setInputValue('')
    setResetValue('')
    setFiscalDate({ month: "", days: "", weekStarts: "", timezone: "" })
    setFriendsList([])
    setDefaultItem(false)
    setCheckedValues([])

  };
  const handleCancel = () => {
    setIsModalVisible(false);
    setInputValue('')
    setResetValue('')
    setFiscalDate({ month: "", days: "", weekStarts: "", timezone: "" })
    setFriendsList([])
    setDefaultItem(false)
    setCheckedValues([])
  };

  const showModal = () => { setIsModalVisible(true) }
  const handleInputValue = (e) => { setInputValue(e.target.value) }
  const handleCheckboxValues = (pickedValue) => { setCheckedValues([...pickedValue]) }
  const handleReasonValue = (value) => { setResetValue(value) }
  const handleFiscalMonth = (value) => { setFiscalDate({ ...fiscalDate, month: value }) }
  const handleFiscalDays = (value) => { setFiscalDate({ ...fiscalDate, days: value }) }
  const handleFiscalWeek = (value) => { setFiscalDate({ ...fiscalDate, weekStarts: value }) }
  const handleFiscalTiming = (value) => { setFiscalDate({ ...fiscalDate, timeZone: value }) }
  const handleCheckExpireDate = () => { setCheckExpireDate(!checkExpireDate) }
  const handleFriendsList = (_value, option) => { setFriendsList([...option]) }
  const handleDefaultItem = () => { setDefaultItem(!defaultItem) }

  return (
    <ContentContainer>
      <Row>
        <Col flex="24px">
          {React.createElement(collapsed ? ArrowRightOutlined : ArrowLeftOutlined, {
            className: 'trigger',
            onClick: handleCollapse,
          })}
        </Col>
        <Col flex="auto">
          <BreadcrumbsContent />
          <TypographyContent list={list} showModal={showModal} />
          <LocationModal
            resetValue={resetValue}
            isModalVisible={isModalVisible}
            handleOk={handleOk}
            handleCancel={handleCancel}
            inputValue={inputValue}
            handleInputValue={handleInputValue}
            handleCheckboxValues={handleCheckboxValues}
            handleReasonValue={handleReasonValue}
            handleFiscalMonth={handleFiscalMonth}
            handleFiscalDays={handleFiscalDays}
            checkExpireDate={checkExpireDate}
            handleCheckExpireDate={handleCheckExpireDate}
            handleFiscalWeek={handleFiscalWeek}
            handleFiscalTiming={handleFiscalTiming}
            handleFriendsList={handleFriendsList}
            defaultItem={defaultItem}
            handleDefaultItem={handleDefaultItem} />
          <List list={list} handleDelete={handleDelete} handlePickDefault={handlePickDefault} />
        </Col>
      </Row>
    </ContentContainer>
  )
}

export default LocationContent
