FROM ubuntu:latest
FROM node:latest
SHELL ["/bin/bash", "-c"] 

RUN apt-get update && \
    apt-get install -y curl

WORKDIR /app/wasm

RUN curl https://sh.rustup.rs -sSf > rustup.sh
RUN chmod 755 rustup.sh
RUN ./rustup.sh -y
RUN rm /app/wasm/rustup.sh

RUN ~/.cargo/bin/cargo install wasm-pack
RUN ~/.cargo/bin/cargo install cargo-watch
