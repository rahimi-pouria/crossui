import { Injectable } from '@nestjs/common';
import { JwtManager, JwtPayload } from './jwt.manager';

@Injectable()
export class JwtCustomService {
    constructor(private readonly jwtManager: JwtManager) {}

    createToken(payload: JwtPayload, expiresIn: string | number = '1h'): string {
        return this.jwtManager.generateToken(payload, expiresIn);
    }
    validateToken(token: string): JwtPayload {
        return this.jwtManager.verifyToken(token);
    }

    readToken(token: string): JwtPayload | null {
        return this.jwtManager.decodeToken(token);
    }
}