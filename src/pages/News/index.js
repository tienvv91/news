import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space } from 'antd';

import { getNewsAPI } from './_api';

const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  


const News = (props) => {
    let { topic } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [items, setItems] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(true)

    const fetchNews = () => {
        setLoading(true)
        getNewsAPI(topic).then(result => {
            console.log(result.data)
            setCurrentPage(1)
            setItems(result.data)
            setLoading(false)
        })
    }

    const goto = link =>{
        console.log(link)
        const links = link.split('/')
        const target = links[links.length - 2]
        navigate(`/news/${topic}/${target}`)
        console.log(target)
    }

    useEffect(() => {
        console.log(topic)
        fetchNews()
    }, [location])

    return (<>
        <List
            itemLayout="vertical"
            size="large"
            loading={loading}
            pagination={{
                current: currentPage,
                hideOnSinglePage: true,
                onChange: (page) => {
                    console.log(page);
                    setCurrentPage(page)
                },
                pageSize: 10,
            }}
            dataSource={items}
            renderItem={(item) => (
                <List.Item
                    key={item.title}
                    // actions={[
                    //     <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                    //     <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                    //     <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                    // ]}
                    extra={
                        <img
                        className='cursor-pointer'
                            width={200}
                            alt="logo"
                            src={item.img}
                        />
                    }
                >
                    <List.Item.Meta
                        avatar={<Avatar size={'large'} src={item.img} />}
                        title={<a onClick={() => goto(item.link)}>{item.title}</a>}
                        description={item.by}
                    />
                    {/* {item.content} */}
                </List.Item>
            )}
        />
    </>)
}

export default News;