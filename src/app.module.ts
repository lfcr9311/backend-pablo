import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { Prisma } from '@prisma/client';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
