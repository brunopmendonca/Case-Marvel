import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import "./TelaDoUsuario.css"
import Modal from 'react-modal'
import Img from '../../imagens/marvel.jpeg'

import axios from 'axios'
import md5 from 'md5'

const baseUrl = "https://gateway.marvel.com/v1/public/characters?"
const chavePublica = "1ea11679ab11b65382e9487268b363a7"
const chavePrivada = "1f2e853ae3b37850fddf90a55e205e48ee6a0faa"

const time = Number(new Date())
const hash = md5(time + chavePrivada + chavePublica)

const TelaDoUsuario = ({ match }) => {

    const [dados, setDados] = useState([])
    const [pesquisa, setPesquisa] = useState()
    const [resultados, setResultados] = useState()
    const [banco, setBanco] = useState()
    const [cardstyle, setCardStyle] = useState("card-heroi")

    const { id } = useParams()

    const customStyles = {
        content: {
            width: '50%',
            height: '50%',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };

    Modal.setAppElement('#root')
    var subtitle;

    const [modalIsOpen, setIsOpen] = React.useState(false);
    // function openModal() {
    //     setIsOpen(true);
    // }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

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

    const addFavoritos = async (numberId, name, imagem, descricao, extensao) => {

        let response = await fetch("https://case-marvel.herokuapp.com/adicionarFavorito", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: id,
                numberId: numberId,
                name: name,
                imagem: imagem,
                descricao: descricao,
                extensao: extensao

            })

        }

        )
        let json = await response.json()
        console.log(json)


    }

    const pushButton = (event) => {
        {
            dados.map(e => {
                if (pesquisa == e.name)
                    return (

                        setResultados(<div className="card-heroi">
                            <span className="nome-heroi">{e.name}</span>
                            <img onClick={() => { abrirModal(e.name, e.imagem, e.extensao, e.descricao) }} src={`${e.thumbnail.path}.${e.thumbnail.extension}`} alt="" />
                            <button onClick={() => { addFavoritos(e.id, e.name, e.thumbnail.path, e.description, e.thumbnail.extension) }}> Favoritos </button>
                        </div>)

                    )
            })
        }
    }

    const mostrarTodosHerois = () => {
        let arquivo = []
        dados.map(e => {
            return (
                arquivo.push(<div className={cardstyle}>
                    <span onClick={() => { mudarEstado() }} className="nome-heroi">{e.name}</span>
                    <img onClick={() => { abrirModal(e.name, e.thumbnail.path, e.thumbnail.extension, e.description) }} src={`${e.thumbnail.path}.${e.thumbnail.extension}`} alt="" />
                    <button onClick={() => { addFavoritos(e.id, e.name, e.thumbnail.path, e.description, e.thumbnail.extension) }}> Favoritos </button>
                </div>))

        })

        setResultados(arquivo)

    }

    const mudarEstado = () => {
        console.log(cardstyle)
        setCardStyle("card-ampliado")
        mostrarTodosHerois()
    }

    const abrirModal = (name, imagem, extensao, descricao) => {

        setIsOpen(true);
        setBanco(
            <div className="modal">
                <img className="modal-img" src={`${imagem}.${extensao}`} alt="" />
                <div className=" nome-descricao">
                    <span className="nome-heroi">{name}</span>
                    <span>{descricao}</span>
                    <button onClick={closeModal}>close</button>
                </div>
            </div>
        )
    }

    let historia = useHistory()

    const irParaFavoritos = (id) => {
        historia.push(`/favoritos/${id}`)
    }


    return (
        <div className="tela-inteira">

            <header className="menu">
                <span >inicio</span>
                <img src={Img} alt="" />
                <span onClick={() => { irParaFavoritos(id) }}>Favoritos</span>
            </header>

            <div className="telaUsuario">

                <h1>Bem Vindo!! {id}</h1>

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
                {/* 
                <h1>{dados[0].name}</h1> */}


                <div className="tela-cards">
                    {resultados}
                </div>

                <div>
                    {/* <button onClick={openModal}>Open Modal</button> */}
                    <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >



                        <h2 ref={_subtitle => (subtitle = _subtitle)}>Caracteristicas</h2>

                        <div>{banco}</div>

                    </Modal>
                </div>

            </div>

        </div >




    )

}

export default TelaDoUsuario