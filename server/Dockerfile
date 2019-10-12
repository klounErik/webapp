FROM node:12.11.1
WORKDIR /usr/app

COPY package.json .
RUN npm install

EXPOSE 8080

COPY . .

CMD ["node", "index"]
