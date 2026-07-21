FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm config set registry https://registry.npmjs.org/

RUN npm config set fetch-retries 10
RUN npm config set fetch-retry-factor 2
RUN npm config set fetch-retry-mintimeout 30000
RUN npm config set fetch-retry-maxtimeout 300000
RUN npm config set fetch-timeout 600000

RUN npm ci

COPY . .

RUN npm run build


FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]