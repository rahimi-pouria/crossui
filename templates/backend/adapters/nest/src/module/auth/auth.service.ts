import { Injectable, NotFoundException } from '@nestjs/common';
import { authUser } from "./auth.model";
import { v4 as uuid } from 'uuid';
import { createAuthDto } from "./dto/create-auth.dto";
import { getAuthDto } from "./dto/get-Auth.dto";

@Injectable()
export class AuthService {
    private allUser: authUser[] = [];

    getUser(): authUser[] {
        return this.allUser;
    }

    findById(id: string): authUser {
        const user = this.allUser.find(u => u.id === id);
        if (!user) throw new NotFoundException('User not found');
        return user;
    }

    findBySearch(getAuthDto: getAuthDto): authUser[] {
        const keys = Object.keys(getAuthDto) as (keyof getAuthDto)[];
        const result = this.allUser.filter(user =>
            keys.every(key =>
                getAuthDto[key] === undefined ||
                user[key as keyof authUser]?.toString().includes(getAuthDto[key]?.toString() || '')
            )
        );
        if (!result.length) throw new NotFoundException('No users found matching criteria');
        return result;
    }

    createUser(createAuthDto: createAuthDto): authUser {
        const user: authUser = {
            id: uuid(),
            ...createAuthDto
        };
        this.allUser.push(user);
        return user;
    }
}