import { Module } from '@nestjs/common';

import { GithubService } from '../../services/github/github.service';
import { GithubController } from './github.controller';

@Module({
  providers: [GithubService],
  controllers: [GithubController],
  exports: [GithubService],
})
export class GithubModule {}
