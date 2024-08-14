import { Link } from 'react-router-dom'
import Menu from "../../layouts/Menu";
import { useNavigate } from 'react-router-dom';

function Categorias () {

    const navigate = useNavigate();
    const lista = [
        { id: 1, nome: 'Categoria 1' },
        { id: 2, nome: 'Categoria 2' },
        { id: 3, nome: 'Categoria 3' },
    ]

    function editarItem(valor) {
        navigate('/categorias/editar/'+valor);
    }

    return (
        <>
            <Menu />
            <h1>Categorias</h1>
            <Link to="/categorias/novo" className='btn btn-success btn-sm'>
                Nova Categoria
            </Link>
            <p>Listagem de Categorias</p>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map((item, indice) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>
                                <button onClick={() => editarItem(item.id)} className='btn btn-primary'>Editar</button>
                
                                <button className='btn btn-danger'>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
           
        </>
    )
}

export default Categorias;