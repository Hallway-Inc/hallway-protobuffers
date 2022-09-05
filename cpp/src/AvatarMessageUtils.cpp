#include "AvatarMessageUtils.h"

#include <math.h>

size_t AvatarMessageUtils::BlendshapesToOscVec(const BlendShapes blendShapes, std::vector<float>& osc_floats_out, bool mirror) {

    if (mirror) {
        osc_floats_out = {
            blendShapes.browinnerup(),
            blendShapes.browdown_r(),
            blendShapes.browdown_l(),
            blendShapes.browouterup_r(),
            blendShapes.browouterup_l(),
            blendShapes.eyelookup_r(),
            blendShapes.eyelookup_l(),
            blendShapes.eyelookdown_r(),
            blendShapes.eyelookdown_l(),
            blendShapes.eyelookin_r(),
            blendShapes.eyelookin_l(),
            blendShapes.eyelookout_r(),
            blendShapes.eyelookout_l(),
            blendShapes.eyeblink_r(),
            blendShapes.eyeblink_l(),
            blendShapes.eyesquint_r(),
            blendShapes.eyesquint_l(),
            blendShapes.eyewide_r(),
            blendShapes.eyewide_l(),
            blendShapes.cheekpuff(),
            blendShapes.cheeksquint_r(),
            blendShapes.cheeksquint_l(),
            blendShapes.nosesneer_r(),
            blendShapes.nosesneer_l(),
            blendShapes.jawopen(),
            blendShapes.jawforward(),
            blendShapes.jawright(),
            blendShapes.jawleft(),
            blendShapes.mouthfunnel(),
            blendShapes.mouthpucker(),
            blendShapes.mouthright(),
            blendShapes.mouthleft(),
            blendShapes.mouthrollupper(),
            blendShapes.mouthrolllower(),
            blendShapes.mouthshrugupper(),
            blendShapes.mouthshruglower(),
            blendShapes.mouthclose(),
            blendShapes.mouthsmile_r(),
            blendShapes.mouthsmile_l(),
            blendShapes.mouthfrown_r(),
            blendShapes.mouthfrown_l(),
            blendShapes.mouthdimple_r(),
            blendShapes.mouthdimple_l(),
            blendShapes.mouthupperup_r(),
            blendShapes.mouthupperup_l(),
            blendShapes.mouthlowerdown_r(),
            blendShapes.mouthlowerdown_l(),
            blendShapes.mouthpress_r(),
            blendShapes.mouthpress_l(),
            blendShapes.mouthstretch_r(),
            blendShapes.mouthstretch_l(),
            blendShapes.tongueout()
        };
    }
    else {
        osc_floats_out = {
            blendShapes.browinnerup(),
            blendShapes.browdown_l(),
            blendShapes.browdown_r(),
            blendShapes.browouterup_l(),
            blendShapes.browouterup_r(),
            blendShapes.eyelookup_l(),
            blendShapes.eyelookup_r(),
            blendShapes.eyelookdown_l(),
            blendShapes.eyelookdown_r(),
            blendShapes.eyelookin_l(),
            blendShapes.eyelookin_r(),
            blendShapes.eyelookout_l(),
            blendShapes.eyelookout_r(),
            blendShapes.eyeblink_l(),
            blendShapes.eyeblink_r(),
            blendShapes.eyesquint_l(),
            blendShapes.eyesquint_r(),
            blendShapes.eyewide_l(),
            blendShapes.eyewide_r(),
            blendShapes.cheekpuff(),
            blendShapes.cheeksquint_l(),
            blendShapes.cheeksquint_r(),
            blendShapes.nosesneer_l(),
            blendShapes.nosesneer_r(),
            blendShapes.jawopen(),
            blendShapes.jawforward(),
            blendShapes.jawleft(),
            blendShapes.jawright(),
            blendShapes.mouthfunnel(),
            blendShapes.mouthpucker(),
            blendShapes.mouthleft(),
            blendShapes.mouthright(),
            blendShapes.mouthrollupper(),
            blendShapes.mouthrolllower(),
            blendShapes.mouthshrugupper(),
            blendShapes.mouthshruglower(),
            blendShapes.mouthclose(),
            blendShapes.mouthsmile_l(),
            blendShapes.mouthsmile_r(),
            blendShapes.mouthfrown_l(),
            blendShapes.mouthfrown_r(),
            blendShapes.mouthdimple_l(),
            blendShapes.mouthdimple_r(),
            blendShapes.mouthupperup_l(),
            blendShapes.mouthupperup_r(),
            blendShapes.mouthlowerdown_l(),
            blendShapes.mouthlowerdown_r(),
            blendShapes.mouthpress_l(),
            blendShapes.mouthpress_r(),
            blendShapes.mouthstretch_l(),
            blendShapes.mouthstretch_r(),
            blendShapes.tongueout()
        };
    }
    return 0;
}
