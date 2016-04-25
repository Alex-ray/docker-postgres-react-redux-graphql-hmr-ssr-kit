# production dockerfile
FROM node:5.10

# add code
COPY . /backend

WORKDIR /backend

#install deps, build, remove initial sources, dev deps
RUN npm i -q && \
    npm run compile && \
    npm prune -q --production && \
    rm -rf lib && \
    mv ./dist ./lib && \
    mv ./assets.json ./lib/assets.json

CMD npm run serve