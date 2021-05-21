import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {








    return (

        <div>

            <div>
                <input placeholder="Usuario" />
                <input placeholder="Senha" />
                <button> Entrar </button>
            </div>

            <div>

                <Link to="/cadastro"> cadastrar</Link>

            </div>

        </div>





    )

}

export default Login