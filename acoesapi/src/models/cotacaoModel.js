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
        allowNull: false,
        references: {
            model: 'acao',
            key: 'idacao'
        }
    },

    cotacao: {
        type: Sequelize.FLOAT,
        allowNull: true
    },

    valormercado: {
        type: Sequelize.FLOAT,
        allowNull: true
    },

    volumetransacoes: {
        type: Sequelize.FLOAT,
        allowNull: true
    },

    moeda: {
        type: Sequelize.TEXT,
        allowNull: true
    },

    data: {
        type: Sequelize.DATE,
        allowNull: true
    }
})