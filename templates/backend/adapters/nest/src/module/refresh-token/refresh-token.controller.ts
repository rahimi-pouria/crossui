import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { RefreshTokenService } from './refresh-token.service';

@Controller('refresh-token')
export class RefreshTokenController {

    constructor(private refreshTokenService: RefreshTokenService) {}

    @Get()
    getAll() {
        return this.refreshTokenService.getAllTokens();
    }

    @Get('/:id')
    findById(@Param('id') id: string) {
        return this.refreshTokenService.findById(id);
    }

    @Post()
    create(@Body() body: any) {
        return this.refreshTokenService.createToken(body);
    }

    @Delete('/:id')
    revoke(@Param('id') id: string) {
        return this.refreshTokenService.revokeToken(id);
    }

    @Delete()
    clearAll() {
        return this.refreshTokenService.clearAll();
    }
}