import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './module/auth/auth.module';
import { JwtModule } from './module/jwt/jwt.module';
import { RefreshTokenModule } from './module/refresh-token/refresh-token.module';
import { GuardModule } from './module/guard/guard.module';
import { RoleModule } from './module/role/role.module';

@Module({
  imports: [AuthModule, JwtModule, RefreshTokenModule, GuardModule, RoleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
