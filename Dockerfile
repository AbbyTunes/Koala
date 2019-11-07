FROM node:12.13.0-alpine

COPY . /app

WORKDIR /app

ENV NODE_ENV=production

RUN npm install --silent \
  && npm run frontend-install --silent \
  && npm rebuild node-sass --prefix frontend \
  && npm run build --prefix frontend

EXPOSE 5000/tcp

CMD ["npm", "start"]