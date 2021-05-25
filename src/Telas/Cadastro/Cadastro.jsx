import React, { useState } from 'react'
import "./style.css"
import { useHistory } from 'react-router-dom'
// import { useState } from 'react'


const Cadastro = () => {

    let historia = useHistory()

    const [nome, setNome] = useState()
    const [senha, setSenha] = useState()
    const [confSenha, setConfSenha] = useState()

    const irParaPerfil = () => {
        window.alert("Cadastro Feito Com Sucesso")
        historia.push("/")
    }

    async function sendForm() {

        let response = await fetch("http://localhost:3001/cadastro", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: "bruno",
                password: "123",
                confirmacao: "123",

            })

        }

        )

        let json = await response.json()
        console.log(json)
        window.alert(json)


    }

    return (


        <div className="telaCadastro">

            <h1>Cadastre -se </h1>
            <div className="entradasCadastro" >
                <input placeholder="Usuario" />
                <input placeholder="Digite uma senha" />
                <input placeholder="Digite a senha novamente" />
                <button onClick={() => {
                    sendForm()
                }}> Cadastrar </button>

            </div>


        </div>




    )

}

export default Cadastro