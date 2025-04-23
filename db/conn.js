import { Sequelize } from "sequelize";
import "dotenv/config";

const database = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
          require: true,
          rejectUnauthorized: false
        }
    }
});

export default database;


//     dialectOptions: {
//    ssl: {
//        require: true,
//        rejectUnauthorized: false
//      }
//  }