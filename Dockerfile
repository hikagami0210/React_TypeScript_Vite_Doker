ARG NODE_VER
FROM node:${NODE_VER}

ENV TZ Asia/Tokyo

USER node

WORKDIR /home/node/street

COPY ./package.json ./yarn.lock ./

RUN yarn install