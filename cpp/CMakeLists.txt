set(LIB_NAME avatarmessage)

# ##############################################################################
# Protobuf
# ##############################################################################
# Library Options
set(protobuf_MSVC_STATIC_RUNTIME OFF) # This will be run with the DLL runtime
set(protobuf_BUILD_TESTS OFF) 
set(protobuf_WITH_ZLIB OFF)
set(protobuf_BUILD_SHARED_LIBS OFF)
set(protobuf_VERBOSE ON CACHE BOOL "Print out things")

# Load library
FetchContent_Declare(
  protobuf
  GIT_REPOSITORY https://github.com/protocolbuffers/protobuf.git
  # Sync with mediapipe proto version
  GIT_TAG v3.19.1
  SOURCE_SUBDIR  cmake
  GIT_SHALLOW TRUE
  GIT_PROGRESS TRUE
  PREFIX "${CMAKE_BINARY_DIR}"
  SOURCE_DIR "${CMAKE_BINARY_DIR}/protobuf"
)
FetchContent_MakeAvailable(protobuf)

add_library(${LIB_NAME} STATIC avatar_message.pb.cc avatar_message.pb.h)

target_include_directories(${LIB_NAME} PUBLIC ${protobuf_SOURCE_DIR}/src)

target_link_libraries(${LIB_NAME} libprotobuf )

