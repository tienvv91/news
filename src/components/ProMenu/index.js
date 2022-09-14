import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { useLocation } from "react-router-dom";
import { useNavigate, useParams } from 'react-router-dom';
import { menuItems } from 'config/menu';

const ProMenu = (props) => {
    let { topic } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [selectKeys, setSelectKeys] = useState([])
    const [items, setItems] = useState([])

    useEffect(()=>{
        menuItems.forEach((el, idx) => el.key = el.label)
        setItems(menuItems)
    })

    useEffect(() => {
        
        let key = [menuItems[0]?.key];
        const pathSnippets = location.pathname.split('/').filter(i => i);
        if (pathSnippets.length <= 0) {
            navigate(`/${menuItems[0].path}/${menuItems[0].label.toLowerCase()}`)
        }
        const activeMenu = menuItems.find(m => `${m.path}` === pathSnippets[0] && m.label.toLocaleLowerCase() == topic)
        if (activeMenu?.children) {
            const childActiveMenu = activeMenu.children.find(m => m.path === pathSnippets[1])
            if (childActiveMenu) {
                key = childActiveMenu.key
            }
        } else if (activeMenu) {
            key = activeMenu.key
        }
        setSelectKeys(key)
    }, [location])


    return (<>
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['0']}
            items={items}

            selectedKeys={selectKeys}
            onClick={(event) => {
                const selected = items.find(i => i.key === event.key)
                if (selected) {
                    navigate(`/${selected.path}/${selected.label.toLowerCase()}`);
                }

            }}
        />
    </>)
}

export default ProMenu;