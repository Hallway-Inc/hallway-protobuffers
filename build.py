import os
import sys
import shutil

# Find python path from current program
pythonBinPath = os.path.dirname(sys.executable).replace('\\', '//') + '//python.exe'
print(f'Using python bin path = {pythonBinPath}')

isDebug = False
if len(sys.argv) > 1:
    if sys.argv[1] == 'debug':
        print('Debug mode')
        isDebug = True

# Build the c++ protobuf
buildExitCode = os.system("bazel build -c opt --define MEDIAPIPE_DISABLE_GPU=1 --action_env PYTHON_BIN_PATH=\"%s\" avatar_message_proto_cc" % pythonBinPath)
if not buildExitCode == 0:
    print('Failed to build c++ protobuf')
    exit()

# Copy mediapipe built pb.h and pb.cc files to build/ 
cppPath = "cpp"
shutil.copyfile('bazel-bin/avatar_message_proto_cc_pb/avatar_message.pb.h', f'{cppPath}/avatar_message.pb.h')
shutil.copyfile('bazel-bin/avatar_message_proto_cc_pb/avatar_message.pb.cc', f'{cppPath}/avatar_message.pb.cc')

# Build the c-sharp protobuf
buildExitCode = os.system("bazel build -c opt --define MEDIAPIPE_DISABLE_GPU=1 --action_env PYTHON_BIN_PATH=\"%s\" avatar_message_proto_cs" % pythonBinPath)
if not buildExitCode == 0:
    print('Failed to build c-sharp protobuf')
    exit()

# Copy mediapipe built pb.h and pb.cc files to build/ 
csPath = "cs"
shutil.copyfile('bazel-bin/avatar_message_proto_cs/AvatarMessage.cs', f'{csPath}/AvatarMessage.cs')


