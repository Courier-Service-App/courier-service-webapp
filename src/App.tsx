import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import theme from './theme';
import { ROUTES } from './constants';
import { Login } from './views';

function App() {
	return (
		<ConfigProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path={ROUTES.LOGIN} element={<Login />} />
                </Routes>
            </BrowserRouter>
        </ConfigProvider>
	);
}

export default App;
