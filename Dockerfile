FROM 32bit/ubuntu:16.04

RUN apt-get update
RUN apt-get install -y nodejs npm libcurl4-openssl-dev
RUN ln -s /usr/bin/nodejs /usr/bin/node

ADD wind3_1.09.052-2d.tar.gz .
ADD wind3_1.09.052-headless.tar.gz .
ADD package/ /wind3/package/
ADD command.txt /wind3_headless

WORKDIR /wind3/package
RUN npm install

ENV NODE_PATH=/wind3:/wind3/package/node_modules
WORKDIR /wind3

# node simple_server.js 8095 test package/src http://localhost:8080/package/res/ 8080 > /log 2>&1 &
# cd /wind3_headless && ./wind.sh && grep -q -e "stack:Error" /log && exit 0
# cat /log
