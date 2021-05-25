const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const models = require('./models')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let user = models.User
let favoritos = models.favoritos


// ***********************************************************************************//

// logar usuario
// app.post("/login", async (req, res) => {

//     console.log(req.body)

//     let response = await user.findOne({
//         where: { name: req.body.name, password: req.body.password }
//     })

//     res.send(JSON.stringify(response))

// })


// Cadastrar usuario 
// app.post("/verificarUsuario", async (req, res) => {

//     let response = await user.findOne({
//         where: { name: req.body.name }
//     })

//     if (response == null) {
//         res.send(JSON.stringify("usuario Cadastrado"))
//     } else (
//         res.send(JSON.stringify("Nome de usuario ja existe"))
//     )

// })

app.post("/cadastro", async (req, res) => {

    let response = await user.findOne({
        where: { name: req.body.name, password: req.body.password }
    })

    if (response == null) {
        res.send(JSON.stringify("cadastro feito com sucesso"))
        let create = user.create({
            name: req.body.name,
            password: req.body.password,
            createdAt: "1",
            updatedAt: "1"

        })

    } else (
        res.send(JSON.stringify("ja possui cadastro"))
    )

})




let port = process.env.PORT || 3001

app.listen(port, (req, res) => {
    console.log("servidor rodando")
})

