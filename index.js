const express = require('express')
const banco = require("./banco")
const pessoa = require('./pessoaA')
const carro = require('./carros')

const app = express()
app.use( express.json())

const PORTA = 3000
app.listen(PORTA, function(){
console.log("Servidor iniciado na porta" + PORTA)
})


banco.conexao.sync(function(){
    console.log("Banco de dados conectado");
})

app.get("/pessoa/",async function(req, res) {
    const resultado = await pessoa.pessoa.findAll()
    res.send(resultado);
})

app.get("/carros/",async function(req, res) {
    const resultado = await carro.carro.findAll()
    res.send(resultado);
})

app.get("/pessoa/:id",async function(req, res) {
    const pessoaSelecionada = await pessoa.pessoa.findByPk(req.params.id, 
        { include: { model: carro.carro } } 
    )
    if( pessoaSelecionada == null ){
        res.status(404).send({})
    }else{
        res.send(pessoaSelecionada);
    } 
})

app.get("/carros/:id",async function(req, res) {
    const carroSelecionado = await carro.carro.findByPk(req.params.id,
        { include: {model: pessoa.pessoa } }
    )
    if( carroSelecionado == null ){
        res.status(404).send({})
    }else{
        res.send(carroSelecionado);
    } 
})

app.post("/pessoa/",async function(req,res){
    const resultado = await pessoa.pessoa.create({
        nome:req.body.nome,
        idade:req.body.idade,
        endereco:req.body.endereco
        //EXEMPLOIMPORTANTE:req.body.EXEMPLOIMPORTANTE
    })
    res.send(resultado)
})

app.post("/carros/",async function(req,res){
    const resultado = await carro.carro.create({
        modelo:req.body.modelo,
        ano:req.body.ano,
        placa:req.body.placa,
        cor:req.body.cor,
        pessoaId:req.body.pessoaId
        
    })
    res.send(resultado)
})

app.put("/pessoaA/:id",async function(req,res){
    const resultado = await pessoa.pessoa.update({
        nome:req.body.nome,
        idade:req.body.idade,
        endereco:req.body.endereco
        //EXEMPLOIMPORTANTE:req.body.EXEMPLOIMPORTANTE
    },{
        where:{id: req.params.id}
    })
    if( resultado == 0){
        res.status(404).send({})
    }else{
        res.send( await pessoa.pessoaa.findByPk(req.params.id))
    }
})

app.put("/carros/:id",async function(req,res){
    const resultado = await carro.carro.update({
        modelo:req.body.modelo,
        ano:req.body.ano,
        placa:req.body.placa,
        cor:req.body.cor,
        pessoaId:req.body.pessoaId
    },{
        where:{id: req.params.id}
    })
    if( resultado == 0){
        res.status(404).send({})
    }else{
        res.send( await carro.carro.findByPk(req.params.id))
    }
})


app.delete("/pessoa/:id",async function(req,res){
    const resultado = await pessoa.pessoa.destroy({
        where:{
            id:req.params.id
        }
    })
    if( resultado == 0 ){
        res.status(404).send({})
    }else{
        res.status(204).send({})
    }
})

app.delete("/carros/:id",async function(req,res){
    const resultado = await carro.carro.destroy({
        where:{
            id:req.params.id
        }
    })
    if( resultado == 0 ){
        res.status(404).send({})
    }else{
        res.status(204).send({})
    }
})