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
            type:sequelize.STRING(45),
        },
        ano:{
            type:sequelize.INTEGER.UNSIGNED,
        },
        placa:{
            type:sequelize.STRING(45),
        },
        cor:{
            type:sequelize.STRING(45),
        }

    },
    { timestamps: false }
)

module.exports = {carro}