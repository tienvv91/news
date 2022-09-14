import React, { useState } from 'react';
import './_style/index.css';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';
import ProMenu from 'components/ProMenu';

const { Header, Sider, Content } = Layout;

const ProSideMenuLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
      <Layout className='pro-side-layout'>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <ProMenu />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    );
}

export default ProSideMenuLayout