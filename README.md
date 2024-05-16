# Ms. Books (Angular)

Link: [**Ms. Books**](https://testing-ms-books.onrender.com/)

This project is a designed to showcase skill and understanding of Angular.

## Tools used

- **Angular 17** (Standalone) + **Sass**
- **Node.js**
- **Docker** (docker-compose)
- **MySQL**

## Basic Overview

The front-end of the app was made using **Angular 17** + **Sass**.

The back-end of the app was made using **Node.js** (uses the front-end's build), and is **Dockerized**.

The Database used is **MySQL**, which runs persistently with a volume, using **docker-compose**.

## Detailed Overview

### Docker

- Docker file is divided into layers, in latest (2023~2024) recommended way, for maximum leverage of docker's caching, for faster subsequent docker builds.

- docker-compose file, configures the app service and the database service, and persists the database and it's contents, through future deployment builds


### Node.js server

- made using ES6 module (.mjs)

- uses caching middleware (**node-cache**) for frequent API calls

- uses asyncLocalStorage, which collects cookie token for each API request, to track guests or loggedInUsers, for API middleware authGuards and log purposes

  
### Angular

- SPA application with lazy-loaded routes

- uses a custom component for dynamic-async-reusable-lazy rendering of local SVG icons

- uses **Sass** for styling



