# Hallway Protobuffers

## Compiling the protocol buffer for typescript

1. Use the protoc compiler in this repo. If you need to update protoc put the new exe here
2. npm install in the js folder
3. Run this command to build `js/src/avatar-message.ts`. DO NOT manually change `js/src/avatar-message.ts`

```bash
protoc --plugin=./js/node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./js/src ./avatar_message.proto --ts_proto_opt=esModuleInterop=true --ts_proto_opt=snakeToCamel=false
```

## Compiling c++ and c# with bazel

```bash
# C++
bazel build -c opt --define MEDIAPIPE_DISABLE_GPU=1 --action_env PYTHON_BIN_PATH=C://Python38//python.exe avatar_message_proto

# C#
bazel build -c opt --define MEDIAPIPE_DISABLE_GPU=1 --action_env PYTHON_BIN_PATH=C://Python38//python.exe avatar_message_csharp_proto

```