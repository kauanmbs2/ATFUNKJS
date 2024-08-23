const sequelize = require("sequelize");
const banco = require("./banco")
const pessoa = require("./pessoaA");

var carro = banco.conexao.define(
    "carro",
    {
        id:{
            type:sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement:true
        },
        modelo:{
            type:sequelize.STRING,
        },
        ano:{
            type:sequelize.INTEGER.UNSIGNED,
        },
        placa:{
            type:sequelize.STRING,
        },
        cor:{
            type:sequelize.STRING,
        },
        pessoaId:{
            type:sequelize.INTEGER.UNSIGNED,
            allowNull:false,
            foreigKey:true
        }

    },
    { timestamps: false }
)

// pessoa.hasMany( carro.carro)
// carro.carro.belongsTo(pessoa)

module.exports = {carro}