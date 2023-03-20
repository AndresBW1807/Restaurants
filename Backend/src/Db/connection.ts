import {Sequelize} from 'sequelize'

const db = new Sequelize('pae', 'root', 'Fenixchaman123', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;