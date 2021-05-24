import React from 'react'
import "./style.css"
import { useHistory } from 'react-router-dom'


const Cadastro = () => {

    let historia = useHistory()

    const irParaPerfil = () => {
        window.alert("Cadastro Feito Com Sucesso")
        historia.push("/")
    }

    return (


        <div className="telaCadastro">

            <h1>Cadastre -se </h1>
            <div className="entradasCadastro" >
                <input placeholder="Usuario" />
                <input placeholder="Digite uma senha" />
                <input placeholder="Digite a senha novamente" />
                <button onClick={() => {
                    irParaPerfil()
                }}> Cadastrar </button>

            </div>


        </div>




    )

}

export default Cadastro