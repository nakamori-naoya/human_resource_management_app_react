FROM node:18
RUN apt update
RUN apt install -y tzdata
RUN apt install -y apache2
WORKDIR /app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install
