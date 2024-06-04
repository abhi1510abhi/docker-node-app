FROM ubuntu

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get upgrade -y
RUN apt-get install -y nodejs


WORKDIR /Users/abhijeetmishra/Documents/hustle/docker-node-app

COPY . .

RUN npm install

ENTRYPOINT ["node" ,"index.js"]
