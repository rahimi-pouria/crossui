import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';

export type GuardCheckFunction = (request: any) => boolean;

@Injectable()
export class CustomGuard implements CanActivate {
    constructor(private checkFn: GuardCheckFunction) {}

    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();

        const isAllowed = this.checkFn(request);

        if (!isAllowed) {
            throw new ForbiddenException('Access denied by CustomGuard');
        }

        return true;
    }
}