import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { Query, UploadedFiles } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { FilesInterceptor } from '@nestjs/platform-express/multer/interceptors';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }



  @Post('upload/profile')
  @UseInterceptors(FileInterceptor('profile'))
  uploadProfile(@UploadedFile() file: Express.Multer.File) {

  }

  @Post('upload/gallery')
  @UseInterceptors(FilesInterceptor('gallery'))
  uploadGallery(@UploadedFiles() file: Express.Multer.File) {

  }
}
