FROM node:latest

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install

COPY ./dist .

EXPOSE 3000

CMD ["node", "app.js"]