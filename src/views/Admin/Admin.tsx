import { ReactElement } from 'react';
import { Layout } from 'antd';
import { Route, Routes } from 'react-router-dom';
import { ADMIN_ROUTES, ROUTES } from '../../routes/constants';
import Menu from '../../components/Menu/Menu';
import { MenuItem } from '../../types';
import { DashboardOutlined, LogoutOutlined } from '@ant-design/icons';
import { Dashboard } from './Dashboard';

const { Header, Content, Footer } = Layout;

export default function GeneralView() {
    const getMenuItem = (key: string, label: string, icon?: ReactElement): MenuItem => {
        return { key, label, icon, };
    }
    
    const items: MenuItem[] = [
        getMenuItem(ADMIN_ROUTES.DASHBOARD, 'Dashboard', <DashboardOutlined />),
        getMenuItem(ROUTES.LOGIN, 'Sign Out', <LogoutOutlined />)
    ];

    return (
        <Layout className='full-width full-height'>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div className="demo-logo" />
                <Menu items={items}/>
            </Header>
            <Content style={{ padding: '0 48px' }}>
                <Routes>
                    <Route path={ADMIN_ROUTES.DASHBOARD}  element={<Dashboard />} />
                </Routes>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                ©{new Date().getFullYear()} Created by Asitha Lakshan
            </Footer>
        </Layout>
    )
}