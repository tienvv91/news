import { Button, Result } from "antd";
import ProSideMenuLayout from "components/ProSideMenuLayout";
import About from "pages/About";
import Home from "pages/Home";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";


const ProRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProSideMenuLayout />}>
                    <Route index path='home' element={<Home />} />
                    <Route index path='about' element={<About />} />

                    <Route path="*" element={<Result
                        status="404"
                        title="404"
                        subTitle="Sorry, the page you visited does not exist."
                        extra={<Button href='/' type="primary">Back Home</Button>}
                    />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default ProRoutes