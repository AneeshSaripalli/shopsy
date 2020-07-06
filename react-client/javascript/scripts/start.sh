#!/bin/bash

cd /app/wasm && source ~/.cargo/env && cargo watch -i .gitignore -i "pkg/*" -s "wasm-pack build --debug --out-dir /app/wasm-build" &
cd /app/javascript && npm start