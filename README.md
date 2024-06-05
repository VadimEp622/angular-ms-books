# Ms. Books (Angular 17)

Link: [**Ms. Books**](https://ms-books-prod.onrender.com/)

This project is a designed to showcase skill and understanding of **Angular**.

## Tools used

- **Angular 17** (Standalone) + **Sass**
- **Node.js**
- **Docker** (docker-compose)
- **MySQL**

## Basic Overview

The front-end of the app was made using **Angular 17** + **Sass**.

The back-end of the app was made using **Node.js** (uses the front-end's build).

The Database used is **MySQL**, which runs persistently with a volume, using **docker-compose**.

The entire app (dev + prod) is **Dockerized**

## Detailed Overview

### Angular

- SPA with lazy-loaded routes

- Dynamic page layout based on current route

- uses a custom component for dynamic-async-reusable-lazy rendering of local SVG icons

- uses **Sass** for styling

  
### Docker

- Docker file is divided into layers, in latest (2023~2024) recommended way, for maximum leverage of docker's caching, for faster subsequent docker builds.

- The docker-compose file, configures the app service and the database service, and persists the database and it's contents, through future deployment builds

- Project has 3 different compose yml files:
  1) **Dev**      --------> Angular (Frontend) + Express.js (Backend) + Nginx (reverse-proxy) + Mysql (Database)
  2) **Pre-prod** --> Express.js (Backend) + MongoDB (Database)
  3) **Prod**     -------> Express.js (Backend)


### Node.js server (Express.js)

- made using ES6 module (.mjs)

- uses caching middleware (**node-cache**) for frequent API calls

- uses asyncLocalStorage, which collects cookie token for each API request, to track guests or loggedInUsers, for API middleware authGuards and log purposes


### MySQL Database

- persistent

- initialize tables, along with trigger for UUID generation upon row creation

- used for local development


### MongoDB Database

- used in production, to allow cloud deployment


### Nginx

- used in local development, for connecting dockerized front-end and back-end images, which run on different hosts

  



