
FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prod

RUN npm install -g http-server

EXPOSE 8080

CMD ["sh", "-c", "http-server dist/lpic-1-lce-app -p ${PORT:-8080} -a 0.0.0.0"]
