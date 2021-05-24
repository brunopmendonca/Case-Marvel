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

    const pushButton = () => {
        console.log(dados)
    }




    return (

        <div>

            <div className="telaUsuario">

                <h1>Bem Vindo !!</h1>


                <div className="pesquisa" >
                    <h2>Digite aqui sua Comic</h2>
                    <input placeholder="Digite sua Comic" />
                    <button onClick={() => {
                        pushButton()
                    }} > Pesquisar </button>
                </div>

                {/* <h1>{dados[0].name}</h1> */}


                <ul>
                    {dados.map(e => {
                        return (
                            <li>
                                <h1>{e.name}</h1>
                                <img src={`${e.thumbnail.path}.${e.thumbnail.extension}`} alt="" />
                            </li>
                        )
                    })}
                </ul>

            </div>

        </div>


    )

}

export default TelaDoUsuario