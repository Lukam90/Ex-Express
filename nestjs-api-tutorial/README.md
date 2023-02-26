# nestjs-api-tutorial

[NestJs Course for Beginners - Create a REST API](https://www.youtube.com/watch?v=GHTA143_b-s) de *Vladimir Agaev* et *FreeCodeCamp*

## Commands

**Packages**

npm i -g @nestjs/cli

npm i -D prisma<br>
npm i @prisma/client

**Create**

nest new nestjs-api-tutorial

**Run**

npm run start:dev

**Modules**

nest g module user<br>
nest g module bookmark<br>
nest g module prisma

**Services**

nest g service prisma --no-spec

## Docker

pip install docker-compose

docker compose up dev-db -d

docker ps

## Prisma

npx prisma init

npx prisma migrate dev

npx prisma generate

npx prisma studio