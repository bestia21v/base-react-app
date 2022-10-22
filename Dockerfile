FROM node:lts-alpine as build-stage
ENV NODE_ENV production
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY ./ /app/
RUN npm run build


FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build-stage /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
