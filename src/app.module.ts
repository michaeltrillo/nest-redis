import { ClusterModule } from '@liaoliaots/nestjs-redis';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClusterModule.forRoot({
      config: {
        nodes: [{ host: 'localhost', port: 6373 }]
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
