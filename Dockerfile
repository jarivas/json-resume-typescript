FROM node:23-bookworm

WORKDIR /app

RUN npm install -g typescript

ENTRYPOINT [ "sleep", "infinity" ]