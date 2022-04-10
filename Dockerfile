FROM node:14.17.0
RUN apt update
RUN apt install -y tzdata
RUN apt install -y apache2
WORKDIR /usr/src/app
