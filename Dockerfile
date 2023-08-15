FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json* ./

COPY src/prisma ./src/prisma/ 

RUN npm ci

COPY . .

ENV NODE_ENV=development
ENV DATABASE_URL=postgresql://postgres:shaqeeb@localhost:5432/notesdb
ENV HASH_SECRET=74da774db79787e8a26f12ff8a69f896ef7ae32186c6d20e930d5936731bb35c4225dd6a504da9a5b141b1a86d5e70797227e8e3b5b321f167d4bfe3b8a69555
ENV NEXTAUTH_SECRET=c53478dd33cb1077254c3478669bc746825980291e3bf6bf1ed9e3be6797e75c8d8bc3f5d9ae5a88209e23e9b7ff57b5ec6c4ad658bf24527aba839d49a9ff40
ENV NEXTAUTH_URL=http://localhost:3000/

EXPOSE 3000

CMD [ "npm", "run", "dev" ]