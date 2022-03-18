import { Sequelize } from "sequelize";


const sequelize = new Sequelize('karbondb', 'klrpierre', 'nJ4PtxJQdNXE4jMq', {
  host: "mariadb.host",
  dialect: 'mysql',
  port: 3306,
});

export default sequelize