import { authUser } from "./auth.model";
import { createAuthDto } from "./dto/create-auth.dto";
export declare class AuthService {
    private allUser;
    getUser(): authUser[];
    findById(id: string): authUser;
    findBySearch(): void;
    createUser(createAuthDto: createAuthDto): authUser;
}
