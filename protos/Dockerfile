FROM node
WORKDIR /protos
SHELL [ "/bin/bash", "-c" ]

COPY package.json .

ARG GITHUB_AUTH_TOKEN
ENV GITHUB_AUTH_TOKEN $GITHUB_AUTH_TOKEN

ADD .npmrc .npmrc

RUN npm update
RUN NODE_ENV=development npm install

ADD tsconfig.json tsconfig.json
ADD protobufs protobufs
ADD scripts scripts

RUN npm run build && npm run deploy