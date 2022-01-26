import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpErrorFilter } from './filters/http-error.filter';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { ConfigService } from './config/config.service';
import { RpcLoggingInterceptor } from './interceptors/rpc-logging.interceptor';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: RpcLoggingInterceptor,
    },
    ConfigService,
  ],
  exports: [ConfigService],
})
export class CommonModule {}
