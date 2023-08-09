<div align="center">

# Coodesh

</div>

## :scroll: Overview

Project test

> This is a challenge by [Coodesh](https://coodesh.com/)

## :dvd: Setup

```
git clone https://github.com/walternascimentobarroso/coodesh.git

cd api

cp .env.example .env

cd ..

docker-compose up -d --build

docker exec -it coodesh_api yarn prisma migrate dev

docker exec -it coodesh_api yarn run init
```

## :dvd: Links

| Type | Link                   |
| :--- | :--------------------- |
| APP  | http://localhost:5173/ |
| API  | http://localhost:3000/ |

## :exclamation: Tech

- [NODEJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)
- [Tailwindcss](https://tailwindcss.com/)
- [React Toastify](https://www.npmjs.com/package/react-toastify/)

## :floppy_disk: Installation

```
git clone https://github.com/walternascimentobarroso/coodesh.git
```

### :rotating_light: Tests

```
docker exec -it coodesh_api yarn run test
```

## :memo: License

The [MIT License]() (MIT)

## :smiley_cat: Author

- [@walternascimentobarroso](https://walternascimentobarroso.github.io/)

Made with &nbsp;❤️&nbsp;
