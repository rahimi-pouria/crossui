
---


```md
# Role Module – NestJS

## Description
A role management module designed to control access levels inside the application.

This module allows defining roles and assigning them to users.

---

## Features

- Role management
- Permission structure
- Scalable design
- Guard integration
- Production ready

---

## Architecture

## Developer Role Model

Example:

```ts
export interface RoleModel {
  id: string
  name: string
  permissions: string[]
}
