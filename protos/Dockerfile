FROM node
WORKDIR /protos
SHELL [ "/bin/bash", "-c" ]

COPY package.json .
RUN npm update
RUN NODE_ENV=development npm install

ADD tsconfig.json tsconfig.json
ADD protobufs protobufs
ADD scripts scripts

RUN npm run build