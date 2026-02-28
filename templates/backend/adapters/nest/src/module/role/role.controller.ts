import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController {

    constructor(private roleService: RoleService) {}

    @Get()
    getRoles() {
        return this.roleService.getRoles();
    }

    @Get('/:id')
    findById(@Param('id') id: string) {
        return this.roleService.findById(id);
    }

    @Post()
    createRole(@Body() body: any) {
        return this.roleService.createRole(body);
    }

    @Patch('/:id')
    updateRole(@Param('id') id: string, @Body() body: any) {
        return this.roleService.updateRole(id, body);
    }

    @Delete('/:id')
    deleteRole(@Param('id') id: string) {
        return this.roleService.deleteRole(id);
    }
}