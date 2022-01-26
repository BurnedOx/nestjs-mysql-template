import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { TcpContext } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class RpcLoggingInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    const request = context.switchToRpc().getContext<TcpContext>().getPattern();
    const now = Date.now();

    return next
      .handle()
      .pipe(
        tap(() =>
          Logger.log(
            `${request} ${Date.now() - now}ms`,
            context.getClass().name,
          ),
        ),
      );
  }
}
