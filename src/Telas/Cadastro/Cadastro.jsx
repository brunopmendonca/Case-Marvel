import React, { useState } from 'react'
import "./style.css"
import { useHistory, useParams } from 'react-router-dom'
import imagem from "../../imagens/marvel.jpeg"
// import { useState } from 'react'


const Cadastro = ({ match }) => {

    const { id } = useParams()

    let historia = useHistory()


    const [nome, setNome] = useState()
    const [senha, setSenha] = useState()
    const [confSenha, setConfSenha] = useState()


    const campoNome = (e) => {
        setNome(e.target.value)
    }

    const campoSenha = (e) => {
        setSenha(e.target.value)
    }

    const campoConfSenha = (e) => {
        setConfSenha(e.target.value)
    }

    const irParaPerfil = () => {
        window.alert("Cadastro Feito Com Sucesso")
        historia.push("/")
    }

    async function sendForm() {

        if (senha == confSenha) {
            let response = await fetch("https://case-marvel.herokuapp.com/cadastro", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: nome,
                    password: senha,
                    confirmacao: confSenha,

                })

            }

            )
            let json = await response.json()
            window.alert(json)


        } else (window.alert("senhas nao conferem"))

    }

    return (


        <div className="telaCadastro">

            <img src={imagem} />

            <h1>Cadastre -se {id} </h1>
            <div className="entradasCadastro" >
                <input onInput={(e) => { campoNome(e) }} placeholder="Usuario" />
                <input onInput={(e) => { campoSenha(e) }} placeholder="Digite uma senha" />
                <input onInput={(e) => { campoConfSenha(e) }} placeholder="Digite a senha novamente" />
                <button onClick={() => {
                    sendForm()
                }}> Cadastrar </button>

            </div>


        </div>




    )

}

export default Cadastro