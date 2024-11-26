FROM node:lts AS runtime
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

ENV STRAPI_URL=http://127.0.0.1:1337
ENV HOST=0.0.0.0
ENV PORT=4321

EXPOSE 4321

CMD node ./dist/server/entry.mjs
