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
RUN npm i -q

RUN npm run build
RUN npm prune -q --production
RUN rm -rf lib

CMD npm run serve