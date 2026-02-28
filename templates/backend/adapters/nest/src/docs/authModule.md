# Auth Module – NestJS

## Description
A flexible and extensible authentication-style module built with **NestJS**.  
This module is intentionally designed to be **model-agnostic**, meaning the developer defines the data model manually based on project needs.

It provides a clean and scalable architecture suitable for real-world backend systems and can later be connected to a database like PostgreSQL, MongoDB, or MySQL.

---

## Features

- Clean architecture
- DTO based structure
- Developer-defined model
- Easily extendable
- Search capability
- UUID support
- Database ready
- Production-ready structure

---

# Developer Model

The data model must be created by the developer.

Example model:

```ts
export interface AuthModel {
  id: string
  url: string
  description: string
}