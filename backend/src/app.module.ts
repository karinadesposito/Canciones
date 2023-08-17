import { Module } from '@nestjs/common';
import { TracksController } from './app.controller';


@Module({
  imports: [],
  controllers: [TracksController],
  providers: [],
})
export class AppModule {}