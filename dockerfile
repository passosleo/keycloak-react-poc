FROM node:12-alpine AS development
ENV NODE_ENV development
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install --silent
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]