#pragma once
#include "avatar_message.pb.h"
#include <vector>

namespace AvatarMessageUtils { // This namespace is free standing util functions and shouldn't be instantiated
    size_t BlendshapesToOscVec(const BlendShapes blendShapes, std::vector<float>& osc_floats_out, bool mirror = false);
};