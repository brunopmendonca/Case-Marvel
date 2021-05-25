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
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/telaDoUsuario" component={TelaDoUsuario} />
                <Route path="/favoritos" component={Favoritos} />

            </Switch>

        </BrowserRouter>)


}

export default Routes