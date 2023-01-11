FROM node:16-alpine as builder
RUN apk add --no-cache git openssh
WORKDIR /usr/src/app
COPY package.json ./
RUN yarn install
COPY . .
RUN yarn build

FROM node:16-alpine
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV
RUN apk add --no-cache git openssh
WORKDIR /usr/src/app
COPY package.json ./
RUN yarn install --production
COPY . .
COPY --from=builder /usr/src/app/.nuxt .nuxt
EXPOSE 3000
CMD ["yarn", "start:prod"]
