FROM node
SHELL ["/bin/bash", "-c"]

RUN apt-get update -y && apt-get upgrade -y && apt-get install -qq -y \
    build-essential \
    g++ \
    gcc \
    python \
    ; 

WORKDIR /app

CMD ["npm", "start"]

ARG GITHUB_AUTH_TOKEN
ENV GITHUB_AUTH_TOKEN $GITHUB_AUTH_TOKEN

ADD .npmrc .npmrc

ADD package.json .
ADD tsconfig.json .
RUN NODE_ENV=development npm install

ADD src src
ADD .env .env