FROM node:6.0-wheezy

#ENV http_proxy http://dsone%5Cofa1:3DS%40ds002@10.6.69.50:8080
#ENV https_proxy http://dsone%5Cofa1:3DS%40ds002@10.6.69.50:8080


#RUN apt-get update -qq
#RUN apt-get install -y build-essential
#RUN apt-get install -y ruby
#RUN gem install sass

RUN mkdir -p /src

#RUN npm cache clean
RUN npm install -g graceful-fs
RUN npm install -g gulp
RUN npm install -g bower
RUN npm install -g typescript
RUN npm install -g tsd

WORKDIR /src

#RUN bash -c "cd /src && npm install"
#RUN /src bower --allow-root install
#RUN /src tsd install



#RUN ["npm", "install"]
##CMD ["bower", "--allow-root", "install"]
#CMD ["tsd", "start"]