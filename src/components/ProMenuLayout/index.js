import React from 'react';
import './_style/index.css';
import { Breadcrumb, Layout, Menu, Space } from 'antd';
import { Outlet } from 'react-router-dom';
import ProMenu from 'components/ProMenu';
import { useNavigate, useParams } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const ProMenuLayout = () => {
    let { topic, title } = useParams();
    const navigate = useNavigate();
    return (<>
        <Layout className="layout">
            <Header>
                <div className='container text-center max-w-screen-lg'>
                {/* <div className="logo" /> */}
                    <ProMenu />
                </div>

            </Header>
            <Content
                style={{
                    padding: '0 50px',
                }}
                className="container max-w-screen-lg"
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    {title && <>
                        <Breadcrumb.Item href='/news/movies'>Home</Breadcrumb.Item>
                        <Breadcrumb.Item className='cursor-pointer capitalize' onClick={() => navigate(`/news/${topic}`)}>{topic}</Breadcrumb.Item>
                    </>}
                </Breadcrumb>
                <Space >
                    <div className={`site-layout-content min-h-screen ${title ? "max-w-screen-md" : ""}`} style={{minWidth:'760px'}}>
                        <Outlet />
                    </div>
                    
                </Space>
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