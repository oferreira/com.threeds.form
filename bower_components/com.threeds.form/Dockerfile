FROM debian:latest

MAINTAINER Olivier Ferreira <olivier@mediainvest.io>
ENV APP_WORKDIR=/var/www

RUN mkdir -p $APP_WORKDIR
WORKDIR $APP_WORKDIR

RUN apt-get update
RUN apt-get install -y build-essential
RUN apt-get install -y git
RUN apt-get install -y nodejs
RUN apt-get install -y npm
RUN ln -s /usr/bin/nodejs /usr/bin/node
RUN rm -rf /var/lib/apt/lists/*

RUN npm install -g bower
RUN npm install -g gulp-cli
RUN npm install -g typescript
RUN npm install -g tsd
RUN npm cache clean

COPY package.json $APP_WORKDIR
RUN npm install

COPY bower.json $APP_WORKDIR
RUN bower --allow-root install

EXPOSE 2000

CMD ["npm", "start"]