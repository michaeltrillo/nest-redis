import { InjectCluster } from '@liaoliaots/nestjs-redis';
import { Injectable } from '@nestjs/common';
import { Cluster } from 'ioredis';

@Injectable()
export class AppService {
  constructor(@InjectCluster() private cluster: Cluster) {
    cluster.ping().then((v) => console.log(v));
  }

  async getHello(): Promise<string> {
    return await this.cluster.info();
  }
}
