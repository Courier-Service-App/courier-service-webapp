import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import theme from './theme';
import { useEffect } from 'react';
import useAuth from './hooks/useAuth';
import { getSessionToken, initialData } from './utils';
import ProtectedRoute from './routes/ProtectedRoutes';
import { ROUTES } from './routes/constants';
import { Login, Home, Register } from './views';
import { GeneralView } from './views/General';
import { AdminView } from './views/Admin';

function App() {
    const { dispatch } = useAuth();

    const load = async () => {
        const token = await getSessionToken();
        if (token) {
            await initialData(token, dispatch);
        }
    }

    useEffect(() => {
        load();
    }, [dispatch]);

    return (
        <ConfigProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path={ROUTES.LOGIN} element={<Login />} />
                    <Route path={ROUTES.HOME} element={<Home />} />
                    <Route path={ROUTES.REGISTER} element={<Register />} />
                    <Route element={<ProtectedRoute />}>
                        <Route path={`${ROUTES.GENERAL}/*`} element={<GeneralView />} />
                        <Route path={`${ROUTES.ADMIN}/*`} element={<AdminView />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ConfigProvider>
    );
}

export default App;
