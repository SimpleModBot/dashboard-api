FROM node:17-buster-slim
WORKDIR /app/api
RUN npm install -g nodemon
# CMD npm run start
CMD nodemon ./src/index.js