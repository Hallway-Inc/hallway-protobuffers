# Hallway Protobuffers

The protobufs only need to be recompiled when the `avatar_message.proto` file changes

## Compiling the protocol buffer for typescript

1. Install protoc (v3.19.1) on your system from [here](https://github.com/protocolbuffers/protobuf/releases/tag/v3.19.1)
2. yarn install in the js folder and then change back to the root folder
3. Run this command to build `js/src/avatar-message.ts`. DO NOT manually change `js/src/avatar-message.ts`

```bash
protoc --plugin=./js/node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./js/src ./hallway_avatar_message.proto --ts_proto_opt=esModuleInterop=true --ts_proto_opt=snakeToCamel=false
```
## Compiling c++ and c# protobufs

1. Configure bazel on your system
2. 
```bash
python build.py
```
> Resultant protobuf files will be copied to the `cpp` and `cs` folders respectively
