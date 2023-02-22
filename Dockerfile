FROM node:18.14

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "index.js"]

