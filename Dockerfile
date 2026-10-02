# Etapa 1: Construcción del frontend
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

# Etapa 2: Servidor Node con Express
FROM node:20-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev --legacy-peer-deps

COPY server.js ./
COPY --from=builder /app/dist ./dist

EXPOSE 4000
ENV PORT=4000

CMD ["node", "server.js"]
