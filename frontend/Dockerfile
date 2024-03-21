# syntax=docker/dockerfile:1

ARG NODE_VERSION=18

FROM node:${NODE_VERSION}-bullseye-slim AS base

RUN apt-get update && apt-get install -y --no-install-recommends dumb-init
# Use production node environment by default.
# ENV NODE_ENV production
# use dev for development
ENV NODE_ENV development

WORKDIR /app

# Allow binaries installed by NPM/Yarn to be executed directly.
ENV PATH /app/node_modules/.bin:$PATH

# Download dependencies as a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.yarn to speed up subsequent builds.
# Leverage a bind mounts to package.json and yarn.lock to avoid having to copy them 
# into this layer.
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=yarn.lock,target=yarn.lock \
    --mount=type=cache,target=/root/.yarn \
    yarn install    --frozen-lockfile

   # yarn install --production --frozen-lockfile

# ei toimi näillä
# Run the application as a non-root user.
#USER node

# Copy the rest of the source files into the image.
#COPY --chown=node:node . ./

# joten 
COPY . ./

FROM base AS dev

# Expose the port that the application listens on.
EXPOSE 5173/tcp

# Run the application.
CMD ["dumb-init", "yarn", "dev"]
