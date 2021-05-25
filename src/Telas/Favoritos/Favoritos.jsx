import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import "./style.css"

import axios from 'axios'
import md5 from 'md5'

const baseUrl = "http://gateway.marvel.com/v1/public/characters?"
const chavePublica = "1ea11679ab11b65382e9487268b363a7"
const chavePrivada = "1f2e853ae3b37850fddf90a55e205e48ee6a0faa"

const time = Number(new Date())
const hash = md5(time + chavePrivada + chavePublica)


const Favoritos = ({ route }) => {

    const [dados, setDados] = useState([])
    const [pesquisa, setPesquisa] = useState()
    const [resultados, setResultados] = useState()
    console.log(route)

    useEffect(() => {

        axios.get(`${baseUrl}ts=${time}&apikey=${chavePublica}&hash=${hash}`)
            .then((response) => {
                setDados(response.data.data.results)
                console.log(dados)

            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    const onChangeText = (e) => {

        setPesquisa(e.target.value)
        console.log(pesquisa)

    }

    const pushButton = (event) => {
        {
            dados.map(e => {
                if (pesquisa == e.name)
                    return (

                        setResultados(<div className="card-heroi">
                            <span className="nome-heroi">{e.name}</span>
                            <img src={`${e.thumbnail.path}.${e.thumbnail.extension}`} alt="" />
                            <button> Favoritos </button>
                        </div>)

                    )
            })
        }
    }

    const mostrarTodosHerois = (event) => {
        let arquivo = []
        dados.map(e => {
            return (
                arquivo.push(<div className="card-heroi">
                    <span className="nome-heroi">{e.name}</span>
                    <img src={`${e.thumbnail.path}.${e.thumbnail.extension}`} alt="" />
                    <button onClick={(event) => { console.log(e.id) }}> Favoritos </button>
                </div>))

        })

        setResultados(arquivo)

    }

    let historia = useHistory()

    const irParaTelaDoUsuario = () => {
        historia.push("/telaDoUsuario")
    }

    return (

        <div className="tela-inteira">

            <header className="menu">
                <span>Meus Dados</span>
                <span onClick={() => { irParaTelaDoUsuario() }}>Pesquisar Comic</span>
            </header>

            <div className="telaUsuario">

                <h1>Confira suas comics!</h1>

                <div className="tela-cards">
                    {resultados}
                </div>

            </div>

        </div>


    )

}

export default Favoritos