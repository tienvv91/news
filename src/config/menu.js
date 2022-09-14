import {
    HomeOutlined,
    InfoCircleOutlined,
    FileTextOutlined 

} from '@ant-design/icons';

export const menuItems = [
    {
        key: '0',
        icon: <HomeOutlined />,
        label: "Home",
        path: 'home'
    },
    {
        key: '1',
        icon: <FileTextOutlined  />,
        label: "News",
        path: 'news'
    },
    {
        key: '2',
        icon: <InfoCircleOutlined />,
        label: "About",
        path: 'about'
    }
]  