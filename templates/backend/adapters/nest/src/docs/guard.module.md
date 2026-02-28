
```md
# Guard Module – NestJS

## Description
A reusable guard system for protecting routes in NestJS applications.

This module allows developers to easily protect endpoints using authentication or role validation.

---

## Features

- Route protection
- JWT validation
- Role validation
- Flexible guard system
- Production ready

---

## Architecture


## Available Guards

| Guard | Description |
|------|-------------|
| AuthGuard | Validates JWT token |
| RoleGuard | Checks user role |

---

## Usage Example

### Protect Route

```ts
@UseGuards(AuthGuard)
@Get()
getData() {
  return []
}
