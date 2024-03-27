import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants';
import { Login, Home, Register } from '../views';

export default function PublicRoutes() {
    return (
        <Routes>
            <Route path={ROUTES.LOGIN} element={<Login />} />           
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.REGISTER} element={<Register />} /> 
        </Routes>
    );
}
