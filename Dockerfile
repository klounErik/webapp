# base image
FROM node:12.8.0 as build-deps
WORKDIR /usr/src/app
COPY package.json ./
RUN yarn
COPY . ./
RUN yarn build

FROM node:12.8.0
WORKDIR /usr/app

EXPOSE 9000
EXPOSE 80

COPY . .

CMD [ "npm", "run", "dev" ]
