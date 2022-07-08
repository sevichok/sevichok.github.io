import React from 'react'
import { Modal, Input, Checkbox, Tooltip, Select, Form, Alert, Row, Col, Button, Typography } from 'antd';
import { InfoCircleOutlined, CaretDownOutlined, WarningOutlined } from '@ant-design/icons';
import {
    Friends, Days, FirstTooltip, SecondTooltip, ThirdTooltip,
    Months, DaysSections, TimeZone, AlertDescription,
    AlertMessage, FourthTooltip
} from './Constants';

function LocationModal({ isModalVisible, handleOk, handleCancel, inputValue, handleInputValue, resetValue,
    handleCheckboxValues, handleReasonValue, handleFiscalMonth, handleFiscalDays, checkExpireDate,
    handleCheckExpireDate, handleFiscalWeek, handleFiscalTiming, handleFriendsList, defaultItem, handleDefaultItem }) {

    return (
        <Modal
            closable
            footer={null}
            title="Create Location"
            maskStyle={{ background: "#242C48", opacity: "0.3" }}
            width={550}
            visible={isModalVisible}
            onCancel={handleCancel}
        >
            <Form name="basic" onFinish={handleOk}>
                <Form.Item>
                    <Input required
                        value={inputValue}
                        onChange={handleInputValue}
                        placeholder="Location Name" />
                </Form.Item>
                <Form.Item label="Workweek" required>
                    <Checkbox.Group
                        style={{ width: "100%", paddingLeft: "80px",fontStyle:"Poppins, sans-serif" }}
                        name='Holidays'
                        onChange={handleCheckboxValues} >
                        <Row>
                            {Days.map((item) => <Col key={item.key} span={8}>
                                <Checkbox value={item.value}>{item.label}
                                </Checkbox></Col>)}
                        </Row>
                    </Checkbox.Group>
                </Form.Item>
                <Form.Item >
                    <Typography.Text
                        className='location-modal-border-typography'
                    > Leave Quota Reset Based On </Typography.Text>
                    <Select
                        style={{ maxWidth: "95%", marginRight: "8px" }}
                        suffixIcon={<CaretDownOutlined />}
                        defaultValue={resetValue}
                        onChange={handleReasonValue}
                    >
                        <Select.Option value="Accounting Year">Accounting Year</Select.Option>
                        <Select.Option value="User Employment Date">User Employment Date</Select.Option>
                    </Select>
                    <Tooltip
                        color={"#1E212ACC"}
                        title={FirstTooltip}>
                        <InfoCircleOutlined style={{ color: '#00A0EC' }} />
                    </Tooltip>
                </Form.Item>
                <Form.Item >
                    <Row justify="start" align="bottom">
                        <Col flex="150px">
                            <Typography.Text
                                className='location-modal-border-typography'
                            > Fiscal Year Start </Typography.Text>
                            <Select
                                style={{ maxWidth: "80%" }}
                                defaultValue={Months[0]}
                                suffixIcon={<CaretDownOutlined />}
                                onChange={handleFiscalMonth}
                            >
                                {Months.map((item) => <Select.Option key={item.key} value={item.value}>{item.label}</Select.Option>)}
                            </Select>
                        </Col>
                        <Col >
                            <Select
                                style={{ maxWidth: "100%" }}
                                defaultValue={DaysSections[0]}
                                suffixIcon={<CaretDownOutlined />}
                                onChange={handleFiscalDays}
                            >
                                {DaysSections.map((item) => <Select.Option key={item.key} value={item.value}>{item.label}</Select.Option>)}
                            </Select>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item>
                    <Checkbox
                        style={{ maxWidth: "95%", marginRight: "8px" }}
                        checked={checkExpireDate}
                        onChange={handleCheckExpireDate}
                    >No Brought Forward Expiry Date</Checkbox>
                    <Tooltip
                        color={"#1E212ACC"}
                        title={SecondTooltip}>
                        <InfoCircleOutlined style={{ color: '#00A0EC' }} />
                    </Tooltip>
                </Form.Item>
                <Form.Item>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <Typography.Text
                            className='location-modal-border-typography'
                        > Week starts on </Typography.Text>
                        <Select
                            style={{ maxWidth: "40%" }}
                            defaultValue={Days[0]}
                            suffixIcon={<CaretDownOutlined />}
                            onChange={handleFiscalWeek}
                        >
                            {[Days[0], Days[1]].map((item) => <Select.Option key={item.key} value={item.value}>{item.label}</Select.Option>)}
                        </Select>
                    </div>
                </Form.Item>
                <Form.Item>
                    <Typography.Text
                        className='location-modal-border-typography'
                    > Time Zone <span style={{ color: "#F24445" }}>*</span>
                    </Typography.Text>
                    <Select
                        style={{ maxWidth: "95%", marginRight: "8px" }}
                        defaultValue={TimeZone[0]}
                        showSearch
                        onChange={handleFiscalTiming}
                    >{TimeZone.map((item) => <Select.Option key={item.key} value={item.value}>{item.label}</Select.Option>)}
                    </Select>
                    <Tooltip
                        color={"#1E212ACC"}
                        title={ThirdTooltip}>
                        <InfoCircleOutlined style={{ color: '#00A0EC' }} />
                    </Tooltip>
                </Form.Item>
                <Form.Item>
                    <Select
                        placeholder="Add Users"
                        mode="multiple"
                        options={Friends}
                        onChange={handleFriendsList}>
                    </Select>
                    <Alert
                        className='location-modal-alert-style'
                        description={AlertDescription}
                        type="warning"
                        showIcon
                        icon={<WarningOutlined style={{ color: 'red' }} />}
                    />
                </Form.Item>
                <Form.Item>
                    <Checkbox
                        className='location-modal-checkbox-style'
                        checked={defaultItem}
                        onChange={handleDefaultItem} >Make This Location Default</Checkbox>
                    <Tooltip
                        color={"#1E212ACC"}
                        title={FourthTooltip}>
                        <InfoCircleOutlined style={{ color: '#00A0EC' }} />
                    </Tooltip>
                </Form.Item>
                <Form.Item>
                    <Alert message={AlertMessage} type="info" />
                </Form.Item>
                <Form.Item>
                    <Row justify="end">
                        <Col>
                            <Button
                                type='default'
                                className='location-modal-button-reset'
                                htmlType='button' onClick={handleCancel}>Reset
                            </Button>
                        </Col>
                        <Col>
                            <Button
                                type='primary'
                                className='location-modal-button-submit'
                                htmlType='submit'>Create
                            </Button>
                        </Col>
                    </Row>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default LocationModal