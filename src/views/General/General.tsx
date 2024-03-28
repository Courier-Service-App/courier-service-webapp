import { ReactElement } from 'react';
import { Layout } from 'antd';
import { Navigate, Route, Routes } from 'react-router-dom';
import { GENERAL_ROUTES, ROUTES } from '../../routes/constants';
import { Dashboard } from './Dashboard';
import Menu from '../../components/Menu/Menu';
import { MenuItem } from '../../types';
import { DashboardOutlined, GiftOutlined, LogoutOutlined } from '@ant-design/icons';
import { CreateShipment } from './CreateShipment';

const { Header, Content, Footer } = Layout;

export default function GeneralView() {
    const getMenuItem = (key: string, label: string, icon?: ReactElement): MenuItem => {
        return { key, label, icon, };
    }
    
    const items: MenuItem[] = [
        getMenuItem(GENERAL_ROUTES.DASHBOARD, 'Dashboard', <DashboardOutlined />),
        getMenuItem(GENERAL_ROUTES.CREATE_SHIPMENT, 'Create Shipment', <GiftOutlined />),
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
                    <Route path={GENERAL_ROUTES.DASHBOARD}  element={<Dashboard />} />
                    <Route path={GENERAL_ROUTES.CREATE_SHIPMENT}  element={<CreateShipment />} />
                    <Route path="*" element={<Navigate to={GENERAL_ROUTES.DASHBOARD} />} />
                </Routes>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                ©{new Date().getFullYear()} Created by Asitha Lakshan
            </Footer>
        </Layout>
    )
}