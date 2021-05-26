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
            name: req.body.name,
            imagem: req.body.imagem,
            descricao: req.body.descricao,
            extensao: req.body.extensao,
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

    let response = await favoritos.findAll({
        where: { userId: req.body.userId }
    }).then(response => {
        console.log(JSON.stringify(response))
        res.send(JSON.stringify(response))
    })


})


app.post("/deletarfavorito", async (req, res) => {

    let deletar = await favoritos.destroy({
        where: { numberId: req.body.numberId, userId: req.body.userId }
    })

    let update = await user.findByPk(req.body.userId, { include: [{ all: true }] }).then((response) => {
        console.log(JSON.stringify(response.Favoritos))
        res.send(JSON.stringify(response.Favoritos))
    })


})





let port = process.env.PORT || 3001

app.listen(port, (req, res) => {
    console.log("servidor rodando")
})

