import { useNavigate } from 'react-router-dom';
import { Button, Row } from 'antd';
import { ROUTES } from '../../routes/constants';

export default function Home () {
    const navigate = useNavigate();

    const onLogin = () => navigate(ROUTES.LOGIN);
    const onRegister = () => navigate(ROUTES.REGISTER);

    return (
        <div className='full-width full-height content-centered'>
            <Row>
                <Button type='primary' onClick={onLogin}>Log in</Button>
                <Button type='primary' onClick={onRegister}>Register</Button>                
            </Row>
        </div>
    )
}