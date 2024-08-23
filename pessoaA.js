const sequelize = require('sequelize')
const banco = require("./banco")
const carro = require("./carros")

var pessoa = banco.conexao.define(
    "pessoa",
{
    id:{
        type:sequelize.INTEGER.UNSIGNED,
        primaryKey:true,
        autoIncrement:true
    },
    nome:{
        type:sequelize.STRING(100),
    },
    idade:{
        type:sequelize.INTEGER.UNSIGNED,
    },
    endereco:{
        type:sequelize.STRING(100),
    }
    },
    { timestamps: false}
)

pessoa.hasMany( carro.carro )
carro.carro.belongsTo( pessoa )
// pessoa.pessoa.belongsTo(carro)
module.exports = {pessoa}