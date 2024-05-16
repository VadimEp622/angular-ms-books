# Ms. Books (Angular)

Link: [**Ms. Books**](https://testing-ms-books.onrender.com/)

This project is a designed to showcase skill and understanding of Angular.

## Tools used

- **Angular** (Standalone)
- **Node.js**
- **Docker** (docker-compose)
- **MySQL**

## Basic Overview

The front-end of the app was made using **Angular 17**.

The back-end of the app was made using **Node.js** (uses the front-end's build), and is **Dockerized**.

The Database used is **MySQL**, which runs persistently with a volume, using **docker-compose**.

## Detailed Overview

### Docker

- Docker file is divided into layers, in latest (2023~2024) recommended way, for maximum leverage of docker's caching, for faster subsequent docker builds.

- docker-compose file, configures the app service and the database service, and persists the database and it's contents, through future deployment builds



