
import { Sequelize } from 'sequelize-typescript';
import { Ads } from './model/ads.entity';
import { User } from './model/user.entity';


export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '12345',
        database: 'rlc',
        logging:false
      });
      sequelize.addModels([User,Ads]);
      await sequelize.sync({force:true});
      return sequelize;
    },
  },
];