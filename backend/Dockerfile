# production dockerfile
FROM node:5.10

RUN mkdir /backend
WORKDIR /backend
RUN mkdir dist

# add code
COPY package.json ./
COPY .babelrc ./
COPY lib ./lib
COPY views ./views
COPY assets.json ./dist/
COPY config ./config

#install deps, build, remove initial sources, dev deps
RUN npm i -q && npm run compile && npm prune -q --production && rm -rf lib && mv ./dist ./lib

CMD npm run serve