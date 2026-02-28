import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

@Injectable()
export class RoleService {

    private roles: any[] = [];

    createRole(data: any) {
        const role = {
            id: uuid(),
            ...data,
            createdAt: new Date(),
        };

        this.roles.push(role);
        return role;
    }

    getRoles() {
        return this.roles;
    }

    findById(id: string) {
        const role = this.roles.find((r) => r.id === id);

        if (!role) {
            throw new NotFoundException('Role not found');
        }

        return role;
    }

    updateRole(id: string, data: any) {
        const role = this.findById(id);

        Object.assign(role, data);
        return role;
    }

    deleteRole(id: string) {
        const index = this.roles.findIndex((r) => r.id === id);

        if (index === -1) {
            throw new NotFoundException('Role not found');
        }

        const removed = this.roles.splice(index, 1);
        return removed[0];
    }
}