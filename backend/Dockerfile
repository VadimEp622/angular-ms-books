# syntax=docker/dockerfile:1

# TODO: research what is docker-compose and how it works, to make the logger work in node.js (file permissions issue)  

ARG NODE_VERSION=21

FROM node:${NODE_VERSION}-alpine

# Use production node environment by default.
ENV NODE_ENV production

# Sets the working directory for any subsequent RUN, CMD, ENTRYPOINT, COPY, and ADD instructions.
WORKDIR /usr/src/app

# Download dependencies as a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.npm to speed up subsequent builds.
# Leverage a bind mounts to package.json and package-lock.json to avoid having to copy them into
# into this layer.
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

# Run the application as a non-root user.
USER node

# Create the logs directory and set its permissions.
# RUN mkdir -p ./logs && chown node:node ./logs

# Expose the port that the application listens on.
EXPOSE 3030

# Copy the rest of the source files into the image.
COPY . .

# Run the application.
CMD ["npm", "start"]