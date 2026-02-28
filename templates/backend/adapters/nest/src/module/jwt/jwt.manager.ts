export interface JwtPayload<T = any> {
    sub?: string | number;
    iat?: number;
    exp?: number;
    data?: T;
}