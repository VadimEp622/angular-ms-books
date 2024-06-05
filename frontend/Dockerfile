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


# ************ IGNORE EVERYTHING BELOW - PURELY FOR REFERENCE ************

# ARG NODE_VERSION=22

# # Stage 1: Build the Angular application
# FROM node:${NODE_VERSION}-slim AS build
# WORKDIR /usr/src/app
# RUN npm install -g @angular/cli
# COPY package*.json ./
# RUN npm install
# COPY . .
# CMD ["npm","run","build"]


# # Stage 2: Serve the Angular application from Stage 1 using nginx
# FROM nginx:1.25.5-alpine
# COPY nginx.conf /etc/nginx/nginx.conf
# COPY --from=build /usr/src/app/dist/browser /usr/share/nginx/html