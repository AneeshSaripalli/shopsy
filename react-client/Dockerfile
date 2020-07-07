FROM wasm-base
SHELL ["/bin/bash", "-c"] 
WORKDIR /app

ADD javascript/package.json javascript/package.json 
ADD javascript/tsconfig.json javascript/tsconfig.json 
ADD javascript/.npmrc javascript/.npmrc

ADD wasm-build wasm-build

ARG GITHUB_AUTH_TOKEN
ENV GITHUB_AUTH_TOKEN $GITHUB_AUTH_TOKEN

RUN cd javascript && npm update
RUN cd javascript && NODE_ENV=development npm install

ADD javascript/public javascript/public
ADD javascript/src javascript/src

ADD javascript/config-overrides.js javascript/config-overrides.js

ADD javascript/scripts/start.sh .
RUN chmod +x start.sh

ADD wasm wasm

ENTRYPOINT [ "./start.sh" ]