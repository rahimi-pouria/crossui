import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { AuthService } from "./auth.service";
import type { authUser } from "./auth.model";
import { createAuthDto } from "./dto/create-auth.dto";
import { getAuthDto } from "./dto/get-Auth.dto";

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Get()
    getUser(): authUser[] {
        return this.authService.getUser();
    }

    @Get(':id')
    findById(@Param('id') id: string): authUser {
        return this.authService.findById(id);
    }

    @Get('search')
    findBySearch(@Query() query: getAuthDto): authUser[] {
        return this.authService.findBySearch(query);
    }

    @Post()
    createUser(@Body() createAuthDto: createAuthDto): authUser {
        return this.authService.createUser(createAuthDto);
    }
}