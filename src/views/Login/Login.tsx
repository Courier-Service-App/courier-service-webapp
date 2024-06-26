import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { userSignIn } from './actions';
import useAuth from '../../hooks/useAuth';
import { ADMIN_ROUTES, GENERAL_ROUTES, ROUTES } from '../../routes/constants';
import { USER_ROLES } from '../../constants';

type LoginProps = {
    email: string;
    password: string;
}

export default function Login() {
    const [loading, setLoading] = useState<boolean>(false);
    const { dispatch } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async ({ email, password }: LoginProps) => {
        setLoading(true);
        message.loading('Please wait...');
        const { isSignedIn, response, role } = await userSignIn(email, password, dispatch);

        if (isSignedIn) {
            message.destroy();
            message.success(response);
            if (role === USER_ROLES.ADMIN) {
                navigate(`${ROUTES.ADMIN}/${ADMIN_ROUTES.DASHBOARD}`);
            }
            else if (role === USER_ROLES.GENERAL) {
                navigate(`${ROUTES.GENERAL}/${GENERAL_ROUTES.DASHBOARD}`);
            }
        }
        else {
            message.destroy();
            message.warning(response);
        }
        setLoading(false);
    }

    return (
        <div className='full-width full-height content-centered'>
            <div className='full-width content-centered'>
                <div className='full-width login-form pad-all'>
                    <Form size='large' className='full-width' onFinish={handleLogin}>
                        <Form.Item name='email'>
                            <Input type='text' prefix={<UserOutlined />} placeholder='Email' />
                        </Form.Item>
                        <Form.Item name='password'>
                            <Input type='password' prefix={<LockOutlined />} placeholder='Password' />
                        </Form.Item>
                        <Form.Item>
                            <Button className='full-width login-button' loading={loading} type='primary' htmlType='submit'>Log in</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}