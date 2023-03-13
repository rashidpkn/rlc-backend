import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { AdsModule } from './ads/ads.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AnalyticsModule } from './analytics/analytics.module';
import { ReportModule } from './report/report.module';
import { BannerModule } from './banner/banner.module';
import { VerifyModule } from './verify/verify.module';
import { BlacklistModule } from './blacklist/blacklist.module';
import { BidModule } from './bid/bid.module';

const storage = diskStorage({
  destination(req, file, cb) {
    cb(null, `./files`)
  },
  filename(req, file, cb) {
    cb(null, `${req.body.name}-${file.originalname}`)

  }
})

const Multer = MulterModule.register({
  storage: storage
})


@Module({
  imports: [
    UserModule, DatabaseModule, Multer, AdsModule,

    ServeStaticModule.forRoot({
      rootPath: join(process.mainModule['path'], '../files'),
      serveRoot: '/files'
    }),

    ServeStaticModule.forRoot({
      rootPath: join(process.mainModule['path'], '../build')
    }),

    AnalyticsModule,

    ReportModule,

    BannerModule,

    VerifyModule,

    BlacklistModule,

    BidModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
