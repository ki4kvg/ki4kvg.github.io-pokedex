import './App.css';
import PokemonCatalog from "./Pages/PokemonCatalogPage/PokemonCatalog";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PokemonDetail from "./Pages/PokemonInfoPage/PokemonDetail";
import st from "./Pages/PokemonCatalogPage/PokemonCatalog.module.css";
import {Layout} from "antd";
import HeaderComponent from "./components/Header/Header";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";

const App = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Layout className={st.layoutBlock}>
                <HeaderComponent/>
                <Routes>
                    <Route path="/" element={<PokemonCatalog/>}/>
                    <Route path="/pokemon/:name" element={<PokemonDetail/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App;
