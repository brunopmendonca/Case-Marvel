import React, { useEffect, useState } from 'react'
import "./TelaDoUsuario.css"

import axios from 'axios'
import md5 from 'md5'


const baseUrl = "http://gateway.marvel.com/v1/public/characters?"
const chavePublica = "1ea11679ab11b65382e9487268b363a7"
const chavePrivada = "1f2e853ae3b37850fddf90a55e205e48ee6a0faa"

const time = Number(new Date())
const hash = md5(time + chavePrivada + chavePublica)




const TelaDoUsuario = () => {

    const [dados, setDados] = useState([])
    const [pesquisa, setPesquisa] = useState()
    const [resultados, setResultados] = useState()

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
                    <button> Favoritos </button>
                </div>))

        })

        setResultados(arquivo)

    }




    return (

        <div className="tela-inteira">

            <div className="telaUsuario">

                <h1>Bem Vindo!!</h1>


                <div className="pesquisa" >
                    <h2>Digite aqui sua Comic</h2>
                    <input onInput={(e) => { onChangeText(e) }} type="text" placeholder="Digite sua Comic" />
                    <button onClick={(event) => {
                        pushButton(event)
                    }} > Pesquisar </button>
                    <button onClick={(event) => {
                        mostrarTodosHerois(event)
                    }} > Mostrar todos os herois </button>
                </div>

                {/* <h1>{dados[0].name}</h1> */}


                <div className="tela-cards">
                    {/* {dados.map(e => {
                        return (
                            <div className="card-heroi">
                                <span className="nome-heroi">{e.name}</span>
                                <img src={`${e.thumbnail.path}.${e.thumbnail.extension}`} alt="" />
                                <button> Favoritos </button>
                            </div>

                        )
                    })} */}
                    {resultados}
                </div>

            </div>

        </div>


    )

}

export default TelaDoUsuario