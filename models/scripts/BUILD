mkdir -p build
pbjs -t static-module -w commonjs -o build/compiled.js $(find protobufs/ -name "*.proto")
pbts -o build/compiled.d.ts build/compiled.js