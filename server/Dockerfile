FROM node:10
WORKDIR /usr/app

COPY package.json .
RUN npm install

EXPOSE 8080
EXPOSE 80

COPY . .
