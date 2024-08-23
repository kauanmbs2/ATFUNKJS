# Como Executar

## POST

Para realizar o POST de Pessoa:

```
http://localhost:3000/pessoa
```
O corpo da requisição deve ser o seguinte:

```
{
	"nome":"Maria",
	"idade": 16,
	"endereco": "Ibirama"
	
}
```

Para realizar o POST de um Carro:

```
http://localhost:3000/carros
```

O corpo da requisição deve ser o seguinte (pessoaId define o id da pessoa com o numero):

```
{
	"modelo": "Uno 4 portas",
	"ano": 2010,
	"placa": "LJDS-72",
	"cor": "Preto",
	"pessoaId": 1
}
```

## GET

Para realizar o GET de todas as Pessoas:

```
http://localhost:3000/pessoa
```
Para realizar o GET de Pessoa pelo Id:

```
http://localhost:3000/pessoa/1
```

Para realizar o GET de Pessoa pelo nome:

```
http://localhost:3000/pessoa/nome/Maria
```

Para realizar o GET de um Carro:

```
http://localhost:3000/carros
```
Para realizar o GET de um Carro pelo Id:

```
http://localhost:3000/carros/1
```

Para realizar o GET de um Carro pelo modelo:

```
http://localhost:3000/carros/modelo/Uno 4 portas
```

## PUT

Para realizar o PUT de Pessoa (O Id deve estar com o valor do Id da pessoa que queira mudar):

```
http://localhost:3000/pessoa/1
```

O corpo da requisição deve ser o seguinte:

```
{
	"nome":"Gustavo",
	"idade": 17,
	"endereco": "Centro"
}
```

Para realizar o PUT de um Carro (O Id deve estar com o valor do Id do carro que queira mudar):

```
http://localhost:3000/carros/1
```

O corpo da requisição deve ser o seguinte (a pessoaId conecta esse carro com a pessoa de Id 1):

```
{
	"modelo": "Fuscão",
	"ano": 2000,
	"placa": "KFS-07",
	"cor": "Preto",
	"pessoaId": 1
}
```

## DELETE

Para realizar o DELETE de Pessoa (o DELETE apaga a pessoa pelo Id):

```
http://localhost:3000/pessoa/1
```

Para realizar o DELETE de um carro (o DELETE apaga o carro pelo Id):

```
http://localhost:3000/carros/1
```