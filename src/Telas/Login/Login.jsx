import React, { useState } from 'react'
import "./style.css"
import { Link, useHistory, useParams } from 'react-router-dom'


const Login = () => {

    let historia = useHistory()

    const [parametro, setParametro] = useState()
    const [name, setNome] = useState()
    const [senha, setSenha] = useState()



    const campoNome = (e) => {
        setNome(e.target.value)
    }

    const campoSenha = (e) => {
        setSenha(e.target.value)
    }


    async function irParaPerfil() {

        let response = await fetch("http://localhost:3001/login", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                password: senha

            })

        })

        let json = await response.json()


        if (json == null) {
            window.alert("nao possui cadastro")
        }
        else {
            historia.push(`/telaDoUsuario/${json.id}`)
        }

    }



    return (

        <div className="telaLogin">

            <h1>Faça o seu login</h1>

            <div className="entradasLogin" >
                <input onInput={(e) => { campoNome(e) }} placeholder="Usuario" />
                <input onInput={(e) => { campoSenha(e) }} placeholder="Senha" />
                <button onClick={() => {
                    irParaPerfil()
                }}> Entrar </button>
                <Link className="botao-cadastro" to="/cadastro"> Cadastrar</Link>
            </div>


        </div>





    )

}

export default Login