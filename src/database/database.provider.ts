import { Sequelize } from 'sequelize-typescript';
import { Ads } from './model/ads.entity';
import { Analytics } from './model/analytics.entity';
import { Banners } from './model/banner.entity';
import { Bid } from './model/bid.entity';
import { Blacklist } from './model/blacklist.entity';
import { Report } from './model/reportedProfile.entity';
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
        database: 'test',
        logging: false,
      });
      sequelize.addModels([User, Ads, Analytics,Report,Banners,Blacklist,Bid]);
      await sequelize.sync({ alter:true });
      return sequelize;
    },
  },
];
