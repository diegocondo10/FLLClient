FROM node:13.3.0 AS builder

RUN npm install -g yarn

WORKDIR /opt/ng
COPY package.json yarn.lock ./
RUN yarn install

ENV PATH="./node_modules/.bin:$PATH" 

COPY . ./
RUN ng build --prod

FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /opt/ng/dist/FLLClient /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]