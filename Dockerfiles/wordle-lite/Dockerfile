FROM node:25-alpine

WORKDIR /app

COPY package.json .

# Dependencies
RUN npm install

RUN npm i -g serve

COPY . .

RUN npm run build

EXPOSE 3000

# CMD [ "serve", "-s", "dist" ]
CMD ["npm", "run", "dev"]