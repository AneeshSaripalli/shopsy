FROM wasm-base
SHELL ["/bin/bash", "-c"] 
WORKDIR /app

ADD ./wasm/ ./wasm/

ADD package.json .
RUN npm update
RUN NODE_ENV=development npm install

ADD src src
ADD public/ public/

ADD scripts/start.sh .
RUN chmod +x ./start.sh

ENTRYPOINT [ "./start.sh" ]