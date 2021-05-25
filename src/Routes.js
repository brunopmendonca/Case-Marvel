import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Cadastro from "./Telas/Cadastro/Cadastro"
import Login from "./Telas/Login/Login"
import TelaDoUsuario from "./Telas/TelaDoUsuario/TelaDoUsuario"
import Favoritos from "./Telas/Favoritos/Favoritos"

const Routes = () => {

    return (

        <BrowserRouter>

            <Switch>

                <Route path="/" exact component={Login} />
                <Route path="/cadastro/:id" component={Cadastro} />
                <Route path="/telaDoUsuario/:id" component={TelaDoUsuario} />
                <Route path="/favoritos/:id" component={Favoritos} />

            </Switch>

        </BrowserRouter>)


}

export default Routes