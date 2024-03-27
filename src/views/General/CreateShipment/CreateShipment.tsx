import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import { GENERAL_ROUTES, ROUTES } from '../../../routes/constants';
import { SaveShipment } from '../../../types';
import { createShipment } from './actions';
import { SHIPMENT_STATUS } from '../../../constants';
import useAuth from '../../../hooks/useAuth';

export default function CreateShipment () {
    const navigate = useNavigate();
    const { authState } = useAuth();
    const { user } = authState;
    const [form] = Form.useForm();

    const handleCreate = async (shipment: SaveShipment) => {        
        const { user_id } = user;
        shipment.userId = user_id;
        shipment.status = SHIPMENT_STATUS.INIT;
        console.log(shipment, user);
        const response = await createShipment(shipment);
        if (response) {
            console.log(GENERAL_ROUTES.DASHBOARD);
            navigate(`${ROUTES.GENERAL}/${GENERAL_ROUTES.DASHBOARD}`, { replace: false });
        }
    };

    return (
        <div className='full-width full-height content-centered'>
            <Form className='form' form={form} onFinish={handleCreate} name="validateOnly" layout="vertical" autoComplete="off">
                <Form.Item name="senderName" label="Sender's name" rules={[{ required: true }]}>
                    <Input type="text" />
                </Form.Item>
                <Form.Item name="senderAddress" label="Sender's address" rules={[{ required: true }]}>
                    <Input.TextArea />
                </Form.Item>
                <Form.Item name="recipientName" label="Recipient name" rules={[{ required: true }]}>
                    <Input type="text" />
                </Form.Item>
                <Form.Item name="recipientAddress" label="Recipient address" rules={[{ required: true }]}>
                    <Input.TextArea />
                </Form.Item>
                <Form.Item name="details" label="Details" rules={[{ required: true }]}>
                    <Input.TextArea />
                </Form.Item>
                <Form.Item>
                    <Button className='full-width' type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </div>
    )
}