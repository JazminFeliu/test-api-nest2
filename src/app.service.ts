import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! desde el nuevo NestJS con docker!';
  }
}
