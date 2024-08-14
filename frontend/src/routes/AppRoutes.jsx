import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Painel from "../pages/Painel";
import Produtos from '../pages/Produtos'
import Categorias from '../pages/Categorias'
import NotFound from '../pages/NotFound'
import CategoriasForm from "../pages/Categorias/CategoriasForm";

function AppRoutes () {
    return (
        <>
           <BrowserRouter>
            <Routes>
                <Route path="/" element={<Painel />} />
                <Route path="/produtos" element={<Produtos />} />

                <Route path="/categorias" element={<Categorias />} />
                <Route path="/categorias/novo" element={<CategoriasForm />} />
                <Route path="/categorias/editar/:id" element={<CategoriasForm />} />
                <Route path="/categorias/editar/:nome/:sobrenome" element={<CategoriasForm />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
           </BrowserRouter>
        </>
    )
}

export default AppRoutes;