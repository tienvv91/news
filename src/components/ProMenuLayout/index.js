import React from 'react';
import './_style/index.css';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const ProMenuLayout = () => {
    return (<>
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={new Array(15).fill(null).map((_, index) => {
                        const key = index + 1;
                        return {
                            key,
                            label: `nav ${key}`,
                        };
                    })}
                />
            </Header>
            <Content
                style={{
                    padding: '0 50px',
                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">
                    <Outlet />
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                ©2022 Created by TienVV
            </Footer>
        </Layout>
    </>)
}

export default ProMenuLayout;