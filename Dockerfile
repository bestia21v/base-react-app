FROM node:lts-alpine
ENV NODE_ENV development
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
EXPOSE 8080
CMD [ "npm", "run", "dev" ]
