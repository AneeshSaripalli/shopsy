BUILD_DIR=build
COMPILE_FILE_NAME=index

yarn version --patch

mkdir -p $BUILD_DIR
pbjs -t static-module -w commonjs -o $BUILD_DIR/$COMPILE_FILE_NAME.js $(find protobufs/ -name "*.proto")
pbts -o $BUILD_DIR/$COMPILE_FILE_NAME.d.ts $BUILD_DIR/$COMPILE_FILE_NAME.js