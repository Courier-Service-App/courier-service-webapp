import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import theme from './theme';
import { useEffect, useState } from 'react';
import useAuth from './hooks/useAuth';
import { isSessionAuthenticated } from './utils';
import { ROUTES } from './routes/constants';
import { Login, Home, Register } from './views';
import { GeneralView } from './views/General';
import { AdminView } from './views/Admin';
import Loading from './components/Loading/Loading';

function App() {
    const [ isAuthenticated, setAuthenticated ] = useState(false);
    const [ loading, setLoading ] = useState(true);
    const { dispatch } = useAuth();

    useEffect(() => {
        isSessionAuthenticated(dispatch).then(authenticated => {
          setAuthenticated(authenticated);
        })
          .catch((e) => console.log(e))
          .finally(() => {
            setLoading(false);
          });
      }, [dispatch, isAuthenticated]);

    return (
        <ConfigProvider theme={theme}>
            { loading ? <Loading /> : 
                <BrowserRouter>
                    <Routes>
                        <Route path={ROUTES.LOGIN} element={<Login />} />
                        <Route path={ROUTES.HOME} element={<Home />} />
                        <Route path={ROUTES.REGISTER} element={<Register />} />
                        { isAuthenticated && <Route path={`${ROUTES.GENERAL}/*`} element={<GeneralView />} />}
                        { isAuthenticated && <Route path={`${ROUTES.ADMIN}/*`} element={<AdminView />} />}
                        { !isAuthenticated && !loading && <Route path="*" element={<Navigate to={ROUTES.HOME} replace={true}/>} />}
                    </Routes>
                </BrowserRouter>
            }
        </ConfigProvider>
    );
}

export default App;
