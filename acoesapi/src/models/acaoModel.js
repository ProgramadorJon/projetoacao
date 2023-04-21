import { Sequelize } from "sequelize"
import banco from "../banco.js"

export default banco.define("acao", {

    idacao: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },

    simbolo: {
        type: Sequelize.TEXT,
        allowNull: false
    },

    nome: {
        type: Sequelize.TEXT,
        allowNull: true
    }
})