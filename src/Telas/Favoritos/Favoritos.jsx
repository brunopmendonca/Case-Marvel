import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import "./style.css"

import axios from 'axios'
import md5 from 'md5'

const baseUrl = "http://gateway.marvel.com/v1/public/characters?"
const chavePublica = "1ea11679ab11b65382e9487268b363a7"
const chavePrivada = "1f2e853ae3b37850fddf90a55e205e48ee6a0faa"

const time = Number(new Date())
const hash = md5(time + chavePrivada + chavePublica)


const Favoritos = ({ match }) => {



    const [dados, setDados] = useState([])
    const [pesquisa, setPesquisa] = useState()
    const [resultados, setResultados] = useState()

    // const [favoritos, setFavoritos] = useState()

    const { id } = useParams()


    function aparecerCard() {

        let response = fetch("http://localhost:3001/mostrarFavoritos", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: id,

            })
        }

        )

        let json = response.json()
        setDados(json)

    }

    aparecerCard()



    let historia = useHistory()

    const irParaTelaDoUsuario = () => {
        historia.push(`/telaDoUsuario/${id}`)
    }

    return (

        <div className="tela-inteira">

            <header className="menu">
                <span>Meus Dados</span>
                <span onClick={() => { irParaTelaDoUsuario() }}>Pesquisar Comic</span>
            </header>

            <div className="telaUsuario">

                <h1>Confira suas comics!{dados} {id}</h1>

                <div className="tela-cards">
                    {resultados}
                </div>

            </div>

        </div>


    )

}

export default Favoritos