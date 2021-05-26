import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import "./style.css"
import Modal from 'react-modal'

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
    const [resultados, setResultados] = useState([])
    const [banco, setBanco] = useState()

    const { id } = useParams()
    let historia = useHistory()

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
            })
            .catch(err => {
                console.log(err)
            })


    }, [])

    useEffect(async () => {
        let response = await fetch("http://localhost:3001/mostrarFavoritos", {
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
        let json = await response.json()
        // console.log(json)
        setResultados(json)


    }, [])

    const mostrarFavoritos = () => {
        return (
            resultados.map(e => {
                return (
                    (<div className="card-heroi">
                        <span className="nome-heroi">{e.name}</span>
                        <img onClick={() => { abrirModal(e.name, e.imagem, e.extensao, e.descricao) }} src={`${e.imagem}.${e.extensao}`} alt="" />
                        <button onClick={() => { deletarFavoritos(e.numberId) }} > deletar </button>
                    </div>))

            })

        )

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


    const deletarFavoritos = async (numberId) => {
        let response = await fetch("http://localhost:3001/deletarFavorito", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: id,
                numberId: numberId



            })

        }

        )
        let json = await response.json()
        // console.log(json)
        setResultados(json)
    }


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

                <h1>Confira suas comics!{id}</h1>

                {/* <button onClick={() => { console.log(resultados) }}>teste</button> */}

                <div className="tela-cards">
                    {mostrarFavoritos()}
                </div>

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


    )

}

export default Favoritos