import { useContext, useState } from "react";
import { AuthContext } from "../../App";
import Swal from 'sweetalert2'

function Login() {

    const { setLogado } = useContext(AuthContext);
    // const[login, setLogin] = useState('');
    // const[senha, setSenha] = useState('');

    const [dataForm, setDataForm] = useState({
        login: '',
        senha: ''
    });

    function mudarCampos(evento) {
        const nome = evento.target.name;
        const valor = evento.target.value;

        // ESTRUTURACAO E DESESTRUTURACAO DE OBJETOS.
        setDataForm({...dataForm, [nome]: valor});
        // setDataForm()
    }

    function logar() {
        const { login, senha } = dataForm
        // CAPTURA LOGIN E SENHA DIGITADOS
        // ENVIA PARA O BACKEND PARA CONSULTAR NO BANCO OS DADOS.
        if(login === 'admin@admin.com.br' && senha === '123123') {
            Swal.fire({
                icon: "success",
                title: "Sucesso",
                text: "Usuario Logado com Sucesso!",
            });
            setLogado(true)
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Login ou senha incorreto!",
            });
        }
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <form className="mt-4">
                        <div>
                            {/* {JSON.stringify(dataForm)} <br /> */}
                            <label htmlFor="">Login</label>
                            {/* <input onChange={evento => setLogin(evento.target.value)} type="text" className="form-control" name="login" id="" /> */}
                            <input onChange={evento => mudarCampos(evento)} type="text" className="form-control" name="login" id="" />
                        </div>
                        <div className="mt-3">
          
                            <label htmlFor="">Senha</label>
                            {/* <input onChange={evento => setSenha(evento.target.value)} type="password" className="form-control" name="senha" id="" /> */}
                            <input onChange={evento => mudarCampos(evento)} type="password" className="form-control" name="senha" id="" />
                        </div> 
                        <div className="mt-3">
                            <button onClick={logar} type="button" className="btn btn-primary btn-sm">Acessar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;