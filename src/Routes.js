import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home/Index'
import Filme from './pages/Filme/Index'

import Header from "./components/Header/Index";
import Erro from "./pages/Erro/Index";
import Favoritos from "./pages/Favoritos/Index";

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header />
            <Routes>
                <Route  path="/" element={<Home />} />
                <Route  path="/filme/:id" element={<Filme />} />
                <Route  path="/favoritos" element={<Favoritos />}/>

                <Route path="*" element={<Erro />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;