import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home/Index'
import Filme from './pages/Filme/Index'

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={<Home />} />
                <Route  path="/filme/:id" element={<Filme />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;