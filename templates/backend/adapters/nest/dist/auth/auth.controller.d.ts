import { AuthService } from "./auth.service";
import { authUser } from "./auth.model";
import { createAuthDto } from "./dto/create-auth.dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    getUser(): authUser[];
    findById(id: string): authUser | undefined;
    createUser(createAuthDto: createAuthDto): authUser;
}
