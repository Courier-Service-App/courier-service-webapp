import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import { ROUTES } from '../../routes/constants';
import { RegistrationProps } from '../../types';
import { userRegistration } from './actions';

export default function Register() {
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const handleRegister = async (data: RegistrationProps) => {
        const response = await userRegistration(data);
        if (response) {
            navigate(ROUTES.HOME);
        }
    };

    return (
        <div className='full-width full-height content-centered'>
            <Form className='form' form={form} onFinish={handleRegister} name="validateOnly" layout="vertical" autoComplete="off">
                <Form.Item name="firstName" label="First name" rules={[{ required: true }]}>
                    <Input type="text" />
                </Form.Item>
                <Form.Item name="lastName" label="Last name" rules={[{ required: true }]}>
                    <Input type="text" />
                </Form.Item>
                <Form.Item name="email" label="Email" rules={[{ required: true }]}>
                    <Input type="email" />
                </Form.Item>
                <Form.Item name="address" label="Address" rules={[{ required: true }]}>
                    <Input.TextArea />
                </Form.Item>
                <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
                    <Input type="text" />
                </Form.Item>
                <Form.Item name="password" label="Password" rules={[{ required: true }]}>
                    <Input type="password" />
                </Form.Item>
                <Form.Item>
                    <Button className='full-width' type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </div>
    )
}