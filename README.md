# Nest-Mongo

## Descripcion

Servicio backend para el manejo de la información y las acciones personales de los usuarios de la plataforma web y de la aplicación. 
Desarrollado en [Nest](https://github.com/nestjs/nest). Apoyado en [TypeORM](https://typeorm.io/), documentado con [Swagger](https://swagger.io/), testeado con [Jest](https://jestjs.io/) y contenido con [Docker](https://www.docker.com/).

## Herramientas
- [Nest](https://docs.nestjs.com/): 8.0.0
- [TypeORM](https://mongoosejs.com/): 6.4.6
- [TypeORM](https://typeorm.io/): 0.2.41
  La app se encuentra multiconectada con Oracle y MongoDB.
  - [OracleDB](https://www.oracle.com/database/technologies/instant-client.html): 5.3.0
  - [MonogDB](https://www.mongodb.com/products/cloud-mongodb): 3.7.3
- [Swagger](https://swagger.io/): 3.0.0 (con [SwaggerUI](https://swagger.io/docs/specification/api-client-generator/ui-for-apps/): 4.3.0)
- [Jest](https://jestjs.io/): 27.2.5
- [Docker](https://www.docker.com/)
  - [Docker Compose](https://docs.docker.com/compose/overview/)



## Instalacion

```bash
$ npm install
```

## Corriendo la app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Pruebas

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
