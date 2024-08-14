import Menu from "../../layouts/Menu";
import { useParams } from "react-router-dom";

function CategoriasForm () {
    const params = useParams();
    
    return (
        <>
            {params.id}
            {params.nome} <br />
            {params.sobrenome}
            <Menu />
            Formulário de Categoria
        </>
    )
}

export default CategoriasForm;