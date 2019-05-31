FROM node:11
WORKDIR /
COPY package*.json ./

RUN npm ci --only=production

COPY /server ./server
COPY /database ./database
COPY /public ./public

EXPOSE 3001
CMD npm run seed && npm start
