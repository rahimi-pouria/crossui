import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { JwtCustomService } from './jwt.service';
import { JwtPayload } from './jwt.manager';

@Controller('jwt')
export class JwtController {
    constructor(private readonly jwtService: JwtCustomService) {}

    @Post('generate')
    generateToken(@Body() body: { payload: JwtPayload; expiresIn?: string | number }) {
        return {
            token: this.jwtService.createToken(body.payload, body.expiresIn),
        };
    }

    @Get('validate')
    validateToken(@Query('token') token: string) {
        return {
            payload: this.jwtService.validateToken(token),
        };
    }

    @Get('decode')
    decodeToken(@Query('token') token: string) {
        return {
            payload: this.jwtService.readToken(token),
        };
    }
}