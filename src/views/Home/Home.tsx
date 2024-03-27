import { useNavigate } from 'react-router-dom';
import { Button, Col, Form, Input, Row, Space } from 'antd';
import { ROUTES } from '../../routes/constants';
import { getShipment } from './actions';
import { useState } from 'react';
import { Shipment } from '../../types';

export default function Home() {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [shipment, setShipment] = useState<Shipment | null>(null);

    const onLogin = () => navigate(ROUTES.LOGIN);
    const onRegister = () => navigate(ROUTES.REGISTER);

    const onTracking = async ({ trackingNumber }: { trackingNumber: string }) => {
        const shipment = await getShipment(trackingNumber);
        setShipment(shipment);
    }

    return (
        <div className='full-width'>
            <Row justify='center' className='pad-all'>
                <Button className='margin-inline' type='primary' onClick={onLogin}>Log in</Button>
                <Button className='margin-inline' type='primary' onClick={onRegister}>Register</Button>
            </Row>
            <div className='full-width full-height content-centered'>
                <Col>
                    <Row>
                        <Form
                            form={form}
                            layout="vertical"
                            className='form'
                            onFinish={onTracking}
                            autoComplete="off"
                        >
                            <Form.Item
                                name="trackingNumber"
                                rules={[{ required: true, message: 'Please enter tracking number' }]}
                            >
                                <Input type='number' placeholder="Enter tracking number" />
                            </Form.Item>
                            <Form.Item>
                                <Button className='full-width' type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Row>
                    {
                        shipment &&
                        <Col>
                            <div>Sender's name: {shipment.sender_name}</div>
                            <div>Sender's address: {shipment.sender_address}</div>
                            <div>Recipient name: {shipment.recipient_name}</div>
                            <div>Recipient address: {shipment.recipient_address}</div>
                            <div>Details: {shipment.details}</div>
                            <div>Status: {shipment.status}</div>
                        </Col>
                    }
                </Col>
            </div>
        </div>
    )
}