FROM rust

WORKDIR /app

COPY dummy.rs dummy.rs

COPY Cargo.toml .

RUN sed -i 's_src/main.rs_dummy.rs_' Cargo.toml
RUN cargo build
RUN sed -i 's_dummy.rs_src/main.rs_' Cargo.toml

COPY . .

CMD ["cargo", "run", "src"]