FROM node:25-alpine

WORKDIR /json-server

# Dependencies
RUN npm install -g json-server

COPY ./data ./data

EXPOSE 3001

CMD [ "json-server", "./data/db.json", "--port", "3001" ]