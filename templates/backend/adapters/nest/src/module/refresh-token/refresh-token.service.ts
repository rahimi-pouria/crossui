import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

@Injectable()
export class RefreshTokenService {

    private tokens: any[] = [];

    createToken(data: any) {
        const token = {
            id: uuid(),
            ...data,
            createdAt: new Date(),
        };

        this.tokens.push(token);
        return token;
    }

    getAllTokens() {
        return this.tokens;
    }

    findById(id: string) {
        const token = this.tokens.find((t) => t.id === id);

        if (!token) {
            throw new NotFoundException('Refresh token not found');
        }

        return token;
    }

    revokeToken(id: string) {
        const index = this.tokens.findIndex((t) => t.id === id);

        if (index === -1) {
            throw new NotFoundException('Refresh token not found');
        }

        const removed = this.tokens.splice(index, 1);
        return removed[0];
    }
    clearAll() {
        this.tokens = [];
        return { message: 'All refresh tokens cleared' };
    }
}