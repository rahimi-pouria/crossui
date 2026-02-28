
```md
# Refresh Token Module – NestJS

## Description
A dedicated module responsible for handling refresh tokens in a scalable authentication system.

This module is separated from the JWT module to provide better architecture and flexibility.

---

## Features

- Refresh token generation
- Token rotation support
- Expiration handling
- Scalable architecture
- Secure token flow
- Production ready

---

## Architecture



---

## Available Methods

| Method | Description |
|--------|-------------|
| generateRefreshToken() | Creates refresh token |
| validateRefreshToken() | Validates refresh token |
| revokeRefreshToken() | Revokes token |

---

## Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /refresh-token | Generate new access token |
| POST | /refresh-token/validate | Validate refresh token |

---

## Usage Example

```ts
const token = refreshTokenService.generateRefreshToken(userId)