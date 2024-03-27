import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants';
import { GeneralView } from '../views/General';

export default function GeneralRoutes() {
    return (
        <Routes>
            <Route path={`${ROUTES.GENERAL}/*`} element={<GeneralView />} />
        </Routes>
    );
}
