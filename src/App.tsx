import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import theme from './theme';
import { PublicRoutes, GeneralRoutes } from './routes';
import { useEffect } from 'react';
import useAuth from './hooks/useAuth';
import { getSessionToken, initialData } from './utils';

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
                <PublicRoutes />
                <GeneralRoutes />
            </BrowserRouter>
        </ConfigProvider>
	);
}

export default App;
