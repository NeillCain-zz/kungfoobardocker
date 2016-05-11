FROM centos:latest

RUN yum install -y epel-release && \
yum install -y nodejs npm

COPY package.json /src/package.json
RUN cd /src; npm install --production
COPY . /src
EXPOSE 8080
CMD ["node", "/src/server.js"]

