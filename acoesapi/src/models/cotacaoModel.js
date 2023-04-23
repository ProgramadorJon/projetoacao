import { Sequelize } from "sequelize"
import banco from "../banco.js"

export default banco.define("cotacao", {
    idcotacao:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    idacao: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: 'acao',
            key: 'idacao'
        }
    },

    cotacao: {
        type: Sequelize.FLOAT,
        allowNull: true
    },

    valorMercado: {
        type: Sequelize.FLOAT,
        allowNull: true
    },

    valorTransacoes: {
        type: Sequelize.FLOAT,
        allowNull: true
    },

    moeda: {
        type: Sequelize.TEXT,
        allowNull: true
    }
})