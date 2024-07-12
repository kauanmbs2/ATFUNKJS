const express = require('express')

const app = express()
app.use( express.json())

const PORTA = 3000
app.listen(PORTA, function(){
console.log("Servidor iniciado na porta" + PORTA)
})

app.get("/", function(req, res){
    res.send('<h1>Olá</>')
})

   
    const pessoas =[
        {id:1, nome:"Juninho", idade:47, Profissão: "Mecanico", Parentes:"Jaiminho"},
    ]

    const carros =[
        {id:1, nome:"carro", modelo:"Fuscao", cor:"Preto", Ano:"1994", Adesivo:"Bola 8"}
    ]

app.get("/pessoas/", function(req, res){
    res.send( pessoas )
})

app.get("/carros/", function(req, res){
    res.send( carros )
})

app.get("/pessoas/:id", function(req,res){
    var pessoaEncontrada = pessoas.find( function(pessoaAtual){
        return pessoaAtual.id == parseInt( req.params.id ,  { include: { model: carros.carros } } )
    })
if( !pessoaEncontrada ){
    res.status(404).send({})
}else{
    res.send( pessoaEncontrada )
}
})

app.get("/carros/:id", function(req,res){
    var CarroEncontrado = pessoas.find( function(CarroAtual){
        return CarroAtual.id == parseInt( req.params.id)
    })
if( !CarroEncontrado ){
    res.status(404).send({})
}else{
    res.send( CarroEncontrado )
}
})

app.post("/pessoas/", function(req,res){
const novaPessoa = {
    id: pessoas.length+1,
    nome: req.body.nome,
    idade: req.body.idade
}
pessoas.push( novaPessoa )
res.send( novaPessoa )
})

app.post("/carros/", function(req,res){
    const novoCarro = {
        id: carros.length+1,
        modelo: req.body.modelo,
        cor: req.body.cor,
        ano: req.body.ano,
        Adesivo: req.body.Adesivo
    }
    carros.push( novoCarro )
    res.send( novoCarro )
    })

app.put("/pessoas/:id", function(req,res){
const pessoaEncontrada = pessoas.find( function( pessoaAtual){
    return pessoaAtual.id == parseInt( req.params.id)
})
if( !pessoaEncontrada ){
    res.status(404).send({})
}else{
    pessoaEncontrada.nome = req.body.nome
    pessoaEncontrada.idade = req.body.idade
    res.send( pessoaEncontrada )
}
})

app.delete("/pessoas/:id", function (req,res){
    const pessoaEncontrada = pessoas.find( function( pessoaAtual){
        return pessoaAtual.id == parseInt( req.params.id)
})
if( !pessoaEncontrada ){
    res.status(404).send({})
}else{
    const index = pessoas.indexOf( pessoaEncontrada )
    pessoas.splice( index, 1 )
    res.send( {} )
    }
})


app.put("/carros/:id", function(req,res){
    const CarroEncontrado = carros.find( function( CarroAtual){
        return CarroAtual.id == parseInt( req.params.id)
    })
    if( !CarroEncontrado ){
        res.status(404).send({})
    }else{
        CarroEncontrado.modelo = req.body.modelo
        CarroEncontrado.cor = req.body.cor
        CarroEncontrado.ano = req.body.ano
        CarroEncontrado.Adesivo = req.body.Adesivo
        res.send( CarroEncontrado )
    }
    })
    
    app.delete("/carros/:id", function (req,res){
        const CarroEncontrado = pessoas.find( function( CarroAtual){
            return CarroAtual.id == parseInt( req.params.id)
    })
    if( !CarroEncontrado ){
        res.status(404).send({})
    }else{
        const index = carros.indexOf( CarroEncontrado )
        carros.splice( index, 1 )
        res.send( {} )
        }
    })