import { Controller, Get, Res } from '@nestjs/common';
import { join } from 'path';
import { Response } from 'express';

@Controller('tracks')
export class TracksController {
  
  @Get()
 getTracks(@Res()res:Response) { 
    const tracks = join(__dirname, '../data/tracks.json')
    res.sendFile(tracks)
  }
}
