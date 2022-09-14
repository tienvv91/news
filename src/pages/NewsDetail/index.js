import { Space, Spin } from 'antd';
import { getNewsDetailAPI } from 'pages/News/_api';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';


const NewsDetail = (props) => {
    let { topic, title } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState(null)

    const fetchNewsDetail = () => {
        setLoading(true)
        console.log(topic, title)
        const data = {
            link: `${topic}/${title}`
        }
        getNewsDetailAPI(data).then(result => {
            console.log(result.data)
            setItem(result.data)
            setLoading(false)
        })
    }

    useEffect(() => {
        fetchNewsDetail()
    }, [location])

    return (<>
    <div className='text-center'>
        {
            loading && <Spin />
        }
    </div>
        <Space direction='vertical'>
            <h1 className='text-2xl'>{item?.title}</h1>
            <h2 className='text-base'>{item?.subTitle}</h2>
            {item?.content?.map((el, idx) => {
                return (
                    <p key={idx}>
                        <div dangerouslySetInnerHTML={{ __html: el }} />
                    </p>)
            })}
            {/* {item.content} */}

        </Space>
    </>)
}

export default NewsDetail;