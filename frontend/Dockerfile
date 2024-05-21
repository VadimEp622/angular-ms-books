# syntax=docker/dockerfile:1

ARG NODE_VERSION=22

### STAGE 1: Build ###
FROM node:${NODE_VERSION}-slim AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/browser /usr/share/nginx/html