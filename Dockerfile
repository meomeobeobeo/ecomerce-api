# Stage 1: Build
FROM node:18.17.1 as build
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Production
FROM node:18.17.1
WORKDIR /app
COPY package*.json .
RUN npm install --only=production

# Uninstall the deprecated @prisma/cli and install prisma
RUN npm uninstall -g @prisma/cli && npm install -g prisma

# Copy the Prisma schema and generate Prisma client
COPY prisma ./prisma
RUN prisma generate

# Copy the built application
COPY --from=build /app/dist ./dist

CMD npm run start:prod
