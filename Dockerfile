# base image
FROM node:12.8.0 as build-deps
WORKDIR /usr/src/app
COPY package.json ./
RUN yarn
COPY . ./
RUN yarn build

CMD [ "npm", "run", "dev" ]
