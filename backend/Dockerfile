# production dockerfile
FROM node:5.10

# add code
COPY . /backend

WORKDIR /backend

#install deps, build, remove initial sources, dev deps
RUN npm i -q && \
    npm run compile && \
    npm prune -q --production && \
    npm install -g yarn \

#migrate & run
CMD ./node_modules/.bin/sequelize db:migrate && \
    npm run serve
