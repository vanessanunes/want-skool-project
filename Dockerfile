FROM node:alpine

WORKDIR /usr/nodeapp

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
