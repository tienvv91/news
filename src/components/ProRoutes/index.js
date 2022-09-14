import { Button, Result } from "antd";
import ProMenuLayout from "components/ProMenuLayout";
import ProSideMenuLayout from "components/ProSideMenuLayout";
import About from "pages/About";
import Home from "pages/Home";
import News from "pages/News";
import NewsDetail from "pages/NewsDetail";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";


const ProRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProMenuLayout />}>
                    {/* <Route  path='home' element={<Home />} /> */}

                    <Route path="news" >
                        <Route index path="" element={<News />} />
                        <Route path=":topic" element={<News />} />
                        <Route path=":topic/:title" element={<NewsDetail />} />
                    </Route>

                    <Route path='about' element={<About />} />

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