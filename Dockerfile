# ARG NODE_VERSION=20.14.0
# FROM node:${NODE_VERSION}-alpine as build

# WORKDIR /frontend
# COPY package.json ./
# COPY ./ ./
# RUN npm install && npm run build

# ENV NODE_ENV=development
# ENV HOST 0.0.0.0
# ENV PORT 3000
# EXPOSE 3000

# CMD [ "npm", "run", "dev" ]
ARG NODE_VERSION=20.14.0
FROM node:${NODE_VERSION}-alpine as build

WORKDIR /frontend
COPY ./ ./
RUN npm install && npm run build

FROM build
WORKDIR /frontend
COPY --from=build /frontend/.output /frontend/.output

ENV NODE_ENV=development
ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "node", ".output/server/index.mjs" ]
