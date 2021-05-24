import React from "react"
import "./Card.css"
import imagem from "../../imagens/cadastro.jpeg"



const CardTitle4 = () => {

    return (

        <div >

            <div className="cardGroup">

                <img src={imagem} />

                <div className="textGroup">
                    <text className="text">texto.....</text>
                    <text className="title1">Titulo</text>

                </div>

            </div>

        </div>

    )

}


export default CardTitle4;
