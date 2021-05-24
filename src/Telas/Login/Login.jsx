import React from 'react'
import "./style.css"
import { Link, useHistory } from 'react-router-dom'


const Login = () => {

    let historia = useHistory()

    const irParaPerfil = () => {
        historia.push("/telaDoUsuario")
    }


    return (

        <div className="telaLogin">

            <h1>Faça o seu login</h1>

            <div className="entradasLogin" >
                <input placeholder="Usuario" />
                <input placeholder="Senha" />
                <button onClick={() => {
                    irParaPerfil()
                }}> Entrar </button>
                <Link className="botao-cadastro" to="/cadastro"> Cadastrar</Link>
            </div>


        </div>





    )

}

export default Login