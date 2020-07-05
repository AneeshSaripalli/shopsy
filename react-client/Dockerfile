FROM wasm-base
FROM node
SHELL ["/bin/bash", "-c"] 
WORKDIR /app

COPY package.json .
RUN npm update
RUN NODE_ENV=development npm install

COPY . .

COPY --from=0 /app/wasm/pkg /app/public/wasm

CMD ["npm", "start"]