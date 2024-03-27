import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants';
import { AdminView } from '../views/Admin';

export default function GeneralRoutes() {
    return (
        <Routes>
            <Route path={`${ROUTES.ADMIN}/*`} element={<AdminView />} />
        </Routes>
    );
}
