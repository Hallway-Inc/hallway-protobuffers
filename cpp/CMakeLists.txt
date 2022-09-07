set(LIB_NAME AvatarMessageLib)

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
# need to do this so that it doesn't try to install all the proto stuff we don't need
FetchContent_GetProperties(protobuf) 
if(NOT protobuf_POPULATED)
  FetchContent_Populate(protobuf)
  add_subdirectory(${protobuf_SOURCE_DIR} ${protobuf_BINARY_DIR} EXCLUDE_FROM_ALL)
endif()

option(AvatarMessageLib_SHARED_OR_STATIC "STATIC or SHARED" "SHARED")
add_library(${LIB_NAME} ${AvatarMessageLib_SHARED_OR_STATIC} src/hallway_avatar_message.pb.cc include/hallway_avatar_message.pb.h)

target_include_directories(${LIB_NAME} PUBLIC ${CMAKE_CURRENT_LIST_DIR}/include ${protobuf_SOURCE_DIR}/src)

target_link_libraries(${LIB_NAME} libprotobuf )

