# Hallway Protobuffers

## Compiling the protocol buffer for typescript

1. Install protoc compiler
2. From

```bash
protoc --plugin=./js/node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./js/src ./avatar-message.proto --ts_proto_opt=esModuleInterop=true --ts_proto_opt=snakeToCamel=false
```


