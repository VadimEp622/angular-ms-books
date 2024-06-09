# syntax=docker/dockerfile:1

ARG NODE_VERSION=22

# Always use slim
FROM node:${NODE_VERSION}-slim

# Assigns node environment as production  
ENV NODE_ENV production

# Run the application as a non-root user.
USER node

# Sets the working directory for any subsequent RUN, CMD, ENTRYPOINT, COPY, and ADD instructions.
# Assigns proper permissions, based on the USER above it.
WORKDIR /usr/src/app

# Download dependencies as a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.npm to speed up subsequent builds.
# Leverage a bind mounts to package.json and package-lock.json to avoid having to copy them into
# into this layer.
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

# Copy the rest of the source files into the image.
# --chown=node:node is for running as non-root
COPY --chown=node:node . .

# Expose the port that the application listens on.
EXPOSE 3030

# Run the application.  
# We don't want npm (aspecially in production) to start processes in Dockerfile
CMD ["node", "server.mjs"]