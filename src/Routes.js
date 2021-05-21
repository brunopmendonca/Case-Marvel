import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Cadastro from "./Componentes/Cadastro/Cadastro"
import Login from "./Componentes/Login/Login"

const Routes = () => {

    return (

        <BrowserRouter>

            <Switch>

                <Route path="/" exact component={Login} />
                <Route path="/cadastro" component={Cadastro} />
            </Switch>

        </BrowserRouter>)


}

export default Routes