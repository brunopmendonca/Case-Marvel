const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const models = require('./models')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let user = models.User
let favoritos = models.Favoritos

app.post("/login", async (req, res) => {

    console.log(req.body)

    let response = await user.findOne({
        where: { name: req.body.name, password: req.body.password }
    })

    res.send(JSON.stringify(response))

})

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

app.post("/adicionarFavorito", async (req, res) => {

    console.log(req.body)

    let response = await favoritos.findOne({
        where: { userId: req.body.userId, numberId: req.body.numberId }
    })

    if (response == null) {
        res.send(JSON.stringify("cadastro feito com sucesso"))
        let create = favoritos.create({
            userId: req.body.userId,
            numberId: req.body.numberId,
            createdAt: "1",
            updatedAt: "1"

        })

    } else (
        res.send(JSON.stringify("ja esta adicionado aos favoritos"))
    )

})

app.post("/mostrarFavoritos", async (req, res) => {

    console.log(req.body)

    let response = await favoritos.findOne({
        where: { userId: req.body.userId }
    }).then(response => {
        res.send(JSON.stringify(response))
    })


})




let port = process.env.PORT || 3001

app.listen(port, (req, res) => {
    console.log("servidor rodando")
})

