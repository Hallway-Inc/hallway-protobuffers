/* eslint-disable */
import Long from 'long'
import * as _m0 from 'protobufjs/minimal'

export const protobufPackage = ''

/** avatar.proto */

export interface AvatarPredictionMessage {
  blendShapes: BlendShapes | undefined
  rotation: Rotation | undefined
  transform: Transform | undefined
}

export interface BlendShapes {
  /** Alphabetical */
  browDown_L: number
  browDown_R: number
  browInnerUp: number
  browOuterUp_L: number
  browOuterUp_R: number
  cheekSquint_L: number
  cheekSquint_R: number
  eyeBlink_L: number
  eyeBlink_R: number
  eyeLookDown_L: number
  eyeLookDown_R: number
  eyeLookIn_L: number
  eyeLookIn_R: number
  eyeLookOut_L: number
  eyeLookOut_R: number
  eyeLookUp_L: number
  eyeLookUp_R: number
  eyeSquint_L: number
  eyeSquint_R: number
  eyeWide_L: number
  eyeWide_R: number
  jawLeft: number
  jawOpen: number
  jawRight: number
  mouthClose: number
  mouthDimple_L: number
  mouthDimple_R: number
  mouthFrown_L: number
  mouthFrown_R: number
  mouthFunnel: number
  mouthLeft: number
  mouthLowerDown_L: number
  mouthLowerDown_R: number
  mouthPress_L: number
  mouthPress_R: number
  mouthPucker: number
  mouthRight: number
  mouthRollLower: number
  mouthRollUpper: number
  mouthShrugLower: number
  mouthShrugUpper: number
  mouthSmile_L: number
  mouthSmile_R: number
  mouthStretch_L: number
  mouthStretch_R: number
  mouthUpperUp_L: number
  mouthUpperUp_R: number
  noseSneer_L: number
  noseSneer_R: number
  /** These are not given by our models yet, so we will always set their value to 0 for now. */
  cheekPuff: number
  jawForward: number
  tongueOut: number
}

export interface Rotation {
  pitch?: number | undefined
  roll?: number | undefined
  yaw?: number | undefined
}

export interface Transform {
  x?: number | undefined
  y?: number | undefined
  z?: number | undefined
}

function createBaseAvatarPredictionMessage(): AvatarPredictionMessage {
  return { blendShapes: undefined, rotation: undefined, transform: undefined }
}

export const AvatarPredictionMessage = {
  encode(message: AvatarPredictionMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blendShapes !== undefined) {
      BlendShapes.encode(message.blendShapes, writer.uint32(10).fork()).ldelim()
    }
    if (message.rotation !== undefined) {
      Rotation.encode(message.rotation, writer.uint32(18).fork()).ldelim()
    }
    if (message.transform !== undefined) {
      Transform.encode(message.transform, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AvatarPredictionMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseAvatarPredictionMessage()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.blendShapes = BlendShapes.decode(reader, reader.uint32())
          break
        case 2:
          message.rotation = Rotation.decode(reader, reader.uint32())
          break
        case 3:
          message.transform = Transform.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): AvatarPredictionMessage {
    return {
      blendShapes: isSet(object.blendShapes) ? BlendShapes.fromJSON(object.blendShapes) : undefined,
      rotation: isSet(object.rotation) ? Rotation.fromJSON(object.rotation) : undefined,
      transform: isSet(object.transform) ? Transform.fromJSON(object.transform) : undefined
    }
  },

  toJSON(message: AvatarPredictionMessage): unknown {
    const obj: any = {}
    message.blendShapes !== undefined &&
      (obj.blendShapes = message.blendShapes ? BlendShapes.toJSON(message.blendShapes) : undefined)
    message.rotation !== undefined && (obj.rotation = message.rotation ? Rotation.toJSON(message.rotation) : undefined)
    message.transform !== undefined &&
      (obj.transform = message.transform ? Transform.toJSON(message.transform) : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<AvatarPredictionMessage>, I>>(object: I): AvatarPredictionMessage {
    const message = createBaseAvatarPredictionMessage()
    message.blendShapes =
      object.blendShapes !== undefined && object.blendShapes !== null
        ? BlendShapes.fromPartial(object.blendShapes)
        : undefined
    message.rotation =
      object.rotation !== undefined && object.rotation !== null ? Rotation.fromPartial(object.rotation) : undefined
    message.transform =
      object.transform !== undefined && object.transform !== null ? Transform.fromPartial(object.transform) : undefined
    return message
  }
}

function createBaseBlendShapes(): BlendShapes {
  return {
    browDown_L: 0,
    browDown_R: 0,
    browInnerUp: 0,
    browOuterUp_L: 0,
    browOuterUp_R: 0,
    cheekSquint_L: 0,
    cheekSquint_R: 0,
    eyeBlink_L: 0,
    eyeBlink_R: 0,
    eyeLookDown_L: 0,
    eyeLookDown_R: 0,
    eyeLookIn_L: 0,
    eyeLookIn_R: 0,
    eyeLookOut_L: 0,
    eyeLookOut_R: 0,
    eyeLookUp_L: 0,
    eyeLookUp_R: 0,
    eyeSquint_L: 0,
    eyeSquint_R: 0,
    eyeWide_L: 0,
    eyeWide_R: 0,
    jawLeft: 0,
    jawOpen: 0,
    jawRight: 0,
    mouthClose: 0,
    mouthDimple_L: 0,
    mouthDimple_R: 0,
    mouthFrown_L: 0,
    mouthFrown_R: 0,
    mouthFunnel: 0,
    mouthLeft: 0,
    mouthLowerDown_L: 0,
    mouthLowerDown_R: 0,
    mouthPress_L: 0,
    mouthPress_R: 0,
    mouthPucker: 0,
    mouthRight: 0,
    mouthRollLower: 0,
    mouthRollUpper: 0,
    mouthShrugLower: 0,
    mouthShrugUpper: 0,
    mouthSmile_L: 0,
    mouthSmile_R: 0,
    mouthStretch_L: 0,
    mouthStretch_R: 0,
    mouthUpperUp_L: 0,
    mouthUpperUp_R: 0,
    noseSneer_L: 0,
    noseSneer_R: 0,
    cheekPuff: 0,
    jawForward: 0,
    tongueOut: 0
  }
}

export const BlendShapes = {
  encode(message: BlendShapes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browDown_L !== 0) {
      writer.uint32(13).float(message.browDown_L)
    }
    if (message.browDown_R !== 0) {
      writer.uint32(21).float(message.browDown_R)
    }
    if (message.browInnerUp !== 0) {
      writer.uint32(29).float(message.browInnerUp)
    }
    if (message.browOuterUp_L !== 0) {
      writer.uint32(37).float(message.browOuterUp_L)
    }
    if (message.browOuterUp_R !== 0) {
      writer.uint32(45).float(message.browOuterUp_R)
    }
    if (message.cheekSquint_L !== 0) {
      writer.uint32(53).float(message.cheekSquint_L)
    }
    if (message.cheekSquint_R !== 0) {
      writer.uint32(61).float(message.cheekSquint_R)
    }
    if (message.eyeBlink_L !== 0) {
      writer.uint32(69).float(message.eyeBlink_L)
    }
    if (message.eyeBlink_R !== 0) {
      writer.uint32(77).float(message.eyeBlink_R)
    }
    if (message.eyeLookDown_L !== 0) {
      writer.uint32(85).float(message.eyeLookDown_L)
    }
    if (message.eyeLookDown_R !== 0) {
      writer.uint32(93).float(message.eyeLookDown_R)
    }
    if (message.eyeLookIn_L !== 0) {
      writer.uint32(101).float(message.eyeLookIn_L)
    }
    if (message.eyeLookIn_R !== 0) {
      writer.uint32(109).float(message.eyeLookIn_R)
    }
    if (message.eyeLookOut_L !== 0) {
      writer.uint32(117).float(message.eyeLookOut_L)
    }
    if (message.eyeLookOut_R !== 0) {
      writer.uint32(125).float(message.eyeLookOut_R)
    }
    if (message.eyeLookUp_L !== 0) {
      writer.uint32(133).float(message.eyeLookUp_L)
    }
    if (message.eyeLookUp_R !== 0) {
      writer.uint32(141).float(message.eyeLookUp_R)
    }
    if (message.eyeSquint_L !== 0) {
      writer.uint32(149).float(message.eyeSquint_L)
    }
    if (message.eyeSquint_R !== 0) {
      writer.uint32(157).float(message.eyeSquint_R)
    }
    if (message.eyeWide_L !== 0) {
      writer.uint32(165).float(message.eyeWide_L)
    }
    if (message.eyeWide_R !== 0) {
      writer.uint32(173).float(message.eyeWide_R)
    }
    if (message.jawLeft !== 0) {
      writer.uint32(181).float(message.jawLeft)
    }
    if (message.jawOpen !== 0) {
      writer.uint32(189).float(message.jawOpen)
    }
    if (message.jawRight !== 0) {
      writer.uint32(197).float(message.jawRight)
    }
    if (message.mouthClose !== 0) {
      writer.uint32(205).float(message.mouthClose)
    }
    if (message.mouthDimple_L !== 0) {
      writer.uint32(213).float(message.mouthDimple_L)
    }
    if (message.mouthDimple_R !== 0) {
      writer.uint32(221).float(message.mouthDimple_R)
    }
    if (message.mouthFrown_L !== 0) {
      writer.uint32(229).float(message.mouthFrown_L)
    }
    if (message.mouthFrown_R !== 0) {
      writer.uint32(237).float(message.mouthFrown_R)
    }
    if (message.mouthFunnel !== 0) {
      writer.uint32(245).float(message.mouthFunnel)
    }
    if (message.mouthLeft !== 0) {
      writer.uint32(253).float(message.mouthLeft)
    }
    if (message.mouthLowerDown_L !== 0) {
      writer.uint32(261).float(message.mouthLowerDown_L)
    }
    if (message.mouthLowerDown_R !== 0) {
      writer.uint32(269).float(message.mouthLowerDown_R)
    }
    if (message.mouthPress_L !== 0) {
      writer.uint32(277).float(message.mouthPress_L)
    }
    if (message.mouthPress_R !== 0) {
      writer.uint32(285).float(message.mouthPress_R)
    }
    if (message.mouthPucker !== 0) {
      writer.uint32(293).float(message.mouthPucker)
    }
    if (message.mouthRight !== 0) {
      writer.uint32(301).float(message.mouthRight)
    }
    if (message.mouthRollLower !== 0) {
      writer.uint32(309).float(message.mouthRollLower)
    }
    if (message.mouthRollUpper !== 0) {
      writer.uint32(317).float(message.mouthRollUpper)
    }
    if (message.mouthShrugLower !== 0) {
      writer.uint32(325).float(message.mouthShrugLower)
    }
    if (message.mouthShrugUpper !== 0) {
      writer.uint32(333).float(message.mouthShrugUpper)
    }
    if (message.mouthSmile_L !== 0) {
      writer.uint32(341).float(message.mouthSmile_L)
    }
    if (message.mouthSmile_R !== 0) {
      writer.uint32(349).float(message.mouthSmile_R)
    }
    if (message.mouthStretch_L !== 0) {
      writer.uint32(357).float(message.mouthStretch_L)
    }
    if (message.mouthStretch_R !== 0) {
      writer.uint32(365).float(message.mouthStretch_R)
    }
    if (message.mouthUpperUp_L !== 0) {
      writer.uint32(373).float(message.mouthUpperUp_L)
    }
    if (message.mouthUpperUp_R !== 0) {
      writer.uint32(381).float(message.mouthUpperUp_R)
    }
    if (message.noseSneer_L !== 0) {
      writer.uint32(389).float(message.noseSneer_L)
    }
    if (message.noseSneer_R !== 0) {
      writer.uint32(397).float(message.noseSneer_R)
    }
    if (message.cheekPuff !== 0) {
      writer.uint32(405).float(message.cheekPuff)
    }
    if (message.jawForward !== 0) {
      writer.uint32(413).float(message.jawForward)
    }
    if (message.tongueOut !== 0) {
      writer.uint32(421).float(message.tongueOut)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlendShapes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseBlendShapes()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.browDown_L = reader.float()
          break
        case 2:
          message.browDown_R = reader.float()
          break
        case 3:
          message.browInnerUp = reader.float()
          break
        case 4:
          message.browOuterUp_L = reader.float()
          break
        case 5:
          message.browOuterUp_R = reader.float()
          break
        case 6:
          message.cheekSquint_L = reader.float()
          break
        case 7:
          message.cheekSquint_R = reader.float()
          break
        case 8:
          message.eyeBlink_L = reader.float()
          break
        case 9:
          message.eyeBlink_R = reader.float()
          break
        case 10:
          message.eyeLookDown_L = reader.float()
          break
        case 11:
          message.eyeLookDown_R = reader.float()
          break
        case 12:
          message.eyeLookIn_L = reader.float()
          break
        case 13:
          message.eyeLookIn_R = reader.float()
          break
        case 14:
          message.eyeLookOut_L = reader.float()
          break
        case 15:
          message.eyeLookOut_R = reader.float()
          break
        case 16:
          message.eyeLookUp_L = reader.float()
          break
        case 17:
          message.eyeLookUp_R = reader.float()
          break
        case 18:
          message.eyeSquint_L = reader.float()
          break
        case 19:
          message.eyeSquint_R = reader.float()
          break
        case 20:
          message.eyeWide_L = reader.float()
          break
        case 21:
          message.eyeWide_R = reader.float()
          break
        case 22:
          message.jawLeft = reader.float()
          break
        case 23:
          message.jawOpen = reader.float()
          break
        case 24:
          message.jawRight = reader.float()
          break
        case 25:
          message.mouthClose = reader.float()
          break
        case 26:
          message.mouthDimple_L = reader.float()
          break
        case 27:
          message.mouthDimple_R = reader.float()
          break
        case 28:
          message.mouthFrown_L = reader.float()
          break
        case 29:
          message.mouthFrown_R = reader.float()
          break
        case 30:
          message.mouthFunnel = reader.float()
          break
        case 31:
          message.mouthLeft = reader.float()
          break
        case 32:
          message.mouthLowerDown_L = reader.float()
          break
        case 33:
          message.mouthLowerDown_R = reader.float()
          break
        case 34:
          message.mouthPress_L = reader.float()
          break
        case 35:
          message.mouthPress_R = reader.float()
          break
        case 36:
          message.mouthPucker = reader.float()
          break
        case 37:
          message.mouthRight = reader.float()
          break
        case 38:
          message.mouthRollLower = reader.float()
          break
        case 39:
          message.mouthRollUpper = reader.float()
          break
        case 40:
          message.mouthShrugLower = reader.float()
          break
        case 41:
          message.mouthShrugUpper = reader.float()
          break
        case 42:
          message.mouthSmile_L = reader.float()
          break
        case 43:
          message.mouthSmile_R = reader.float()
          break
        case 44:
          message.mouthStretch_L = reader.float()
          break
        case 45:
          message.mouthStretch_R = reader.float()
          break
        case 46:
          message.mouthUpperUp_L = reader.float()
          break
        case 47:
          message.mouthUpperUp_R = reader.float()
          break
        case 48:
          message.noseSneer_L = reader.float()
          break
        case 49:
          message.noseSneer_R = reader.float()
          break
        case 50:
          message.cheekPuff = reader.float()
          break
        case 51:
          message.jawForward = reader.float()
          break
        case 52:
          message.tongueOut = reader.float()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): BlendShapes {
    return {
      browDown_L: isSet(object.browDown_L) ? Number(object.browDown_L) : 0,
      browDown_R: isSet(object.browDown_R) ? Number(object.browDown_R) : 0,
      browInnerUp: isSet(object.browInnerUp) ? Number(object.browInnerUp) : 0,
      browOuterUp_L: isSet(object.browOuterUp_L) ? Number(object.browOuterUp_L) : 0,
      browOuterUp_R: isSet(object.browOuterUp_R) ? Number(object.browOuterUp_R) : 0,
      cheekSquint_L: isSet(object.cheekSquint_L) ? Number(object.cheekSquint_L) : 0,
      cheekSquint_R: isSet(object.cheekSquint_R) ? Number(object.cheekSquint_R) : 0,
      eyeBlink_L: isSet(object.eyeBlink_L) ? Number(object.eyeBlink_L) : 0,
      eyeBlink_R: isSet(object.eyeBlink_R) ? Number(object.eyeBlink_R) : 0,
      eyeLookDown_L: isSet(object.eyeLookDown_L) ? Number(object.eyeLookDown_L) : 0,
      eyeLookDown_R: isSet(object.eyeLookDown_R) ? Number(object.eyeLookDown_R) : 0,
      eyeLookIn_L: isSet(object.eyeLookIn_L) ? Number(object.eyeLookIn_L) : 0,
      eyeLookIn_R: isSet(object.eyeLookIn_R) ? Number(object.eyeLookIn_R) : 0,
      eyeLookOut_L: isSet(object.eyeLookOut_L) ? Number(object.eyeLookOut_L) : 0,
      eyeLookOut_R: isSet(object.eyeLookOut_R) ? Number(object.eyeLookOut_R) : 0,
      eyeLookUp_L: isSet(object.eyeLookUp_L) ? Number(object.eyeLookUp_L) : 0,
      eyeLookUp_R: isSet(object.eyeLookUp_R) ? Number(object.eyeLookUp_R) : 0,
      eyeSquint_L: isSet(object.eyeSquint_L) ? Number(object.eyeSquint_L) : 0,
      eyeSquint_R: isSet(object.eyeSquint_R) ? Number(object.eyeSquint_R) : 0,
      eyeWide_L: isSet(object.eyeWide_L) ? Number(object.eyeWide_L) : 0,
      eyeWide_R: isSet(object.eyeWide_R) ? Number(object.eyeWide_R) : 0,
      jawLeft: isSet(object.jawLeft) ? Number(object.jawLeft) : 0,
      jawOpen: isSet(object.jawOpen) ? Number(object.jawOpen) : 0,
      jawRight: isSet(object.jawRight) ? Number(object.jawRight) : 0,
      mouthClose: isSet(object.mouthClose) ? Number(object.mouthClose) : 0,
      mouthDimple_L: isSet(object.mouthDimple_L) ? Number(object.mouthDimple_L) : 0,
      mouthDimple_R: isSet(object.mouthDimple_R) ? Number(object.mouthDimple_R) : 0,
      mouthFrown_L: isSet(object.mouthFrown_L) ? Number(object.mouthFrown_L) : 0,
      mouthFrown_R: isSet(object.mouthFrown_R) ? Number(object.mouthFrown_R) : 0,
      mouthFunnel: isSet(object.mouthFunnel) ? Number(object.mouthFunnel) : 0,
      mouthLeft: isSet(object.mouthLeft) ? Number(object.mouthLeft) : 0,
      mouthLowerDown_L: isSet(object.mouthLowerDown_L) ? Number(object.mouthLowerDown_L) : 0,
      mouthLowerDown_R: isSet(object.mouthLowerDown_R) ? Number(object.mouthLowerDown_R) : 0,
      mouthPress_L: isSet(object.mouthPress_L) ? Number(object.mouthPress_L) : 0,
      mouthPress_R: isSet(object.mouthPress_R) ? Number(object.mouthPress_R) : 0,
      mouthPucker: isSet(object.mouthPucker) ? Number(object.mouthPucker) : 0,
      mouthRight: isSet(object.mouthRight) ? Number(object.mouthRight) : 0,
      mouthRollLower: isSet(object.mouthRollLower) ? Number(object.mouthRollLower) : 0,
      mouthRollUpper: isSet(object.mouthRollUpper) ? Number(object.mouthRollUpper) : 0,
      mouthShrugLower: isSet(object.mouthShrugLower) ? Number(object.mouthShrugLower) : 0,
      mouthShrugUpper: isSet(object.mouthShrugUpper) ? Number(object.mouthShrugUpper) : 0,
      mouthSmile_L: isSet(object.mouthSmile_L) ? Number(object.mouthSmile_L) : 0,
      mouthSmile_R: isSet(object.mouthSmile_R) ? Number(object.mouthSmile_R) : 0,
      mouthStretch_L: isSet(object.mouthStretch_L) ? Number(object.mouthStretch_L) : 0,
      mouthStretch_R: isSet(object.mouthStretch_R) ? Number(object.mouthStretch_R) : 0,
      mouthUpperUp_L: isSet(object.mouthUpperUp_L) ? Number(object.mouthUpperUp_L) : 0,
      mouthUpperUp_R: isSet(object.mouthUpperUp_R) ? Number(object.mouthUpperUp_R) : 0,
      noseSneer_L: isSet(object.noseSneer_L) ? Number(object.noseSneer_L) : 0,
      noseSneer_R: isSet(object.noseSneer_R) ? Number(object.noseSneer_R) : 0,
      cheekPuff: isSet(object.cheekPuff) ? Number(object.cheekPuff) : 0,
      jawForward: isSet(object.jawForward) ? Number(object.jawForward) : 0,
      tongueOut: isSet(object.tongueOut) ? Number(object.tongueOut) : 0
    }
  },

  toJSON(message: BlendShapes): unknown {
    const obj: any = {}
    message.browDown_L !== undefined && (obj.browDown_L = message.browDown_L)
    message.browDown_R !== undefined && (obj.browDown_R = message.browDown_R)
    message.browInnerUp !== undefined && (obj.browInnerUp = message.browInnerUp)
    message.browOuterUp_L !== undefined && (obj.browOuterUp_L = message.browOuterUp_L)
    message.browOuterUp_R !== undefined && (obj.browOuterUp_R = message.browOuterUp_R)
    message.cheekSquint_L !== undefined && (obj.cheekSquint_L = message.cheekSquint_L)
    message.cheekSquint_R !== undefined && (obj.cheekSquint_R = message.cheekSquint_R)
    message.eyeBlink_L !== undefined && (obj.eyeBlink_L = message.eyeBlink_L)
    message.eyeBlink_R !== undefined && (obj.eyeBlink_R = message.eyeBlink_R)
    message.eyeLookDown_L !== undefined && (obj.eyeLookDown_L = message.eyeLookDown_L)
    message.eyeLookDown_R !== undefined && (obj.eyeLookDown_R = message.eyeLookDown_R)
    message.eyeLookIn_L !== undefined && (obj.eyeLookIn_L = message.eyeLookIn_L)
    message.eyeLookIn_R !== undefined && (obj.eyeLookIn_R = message.eyeLookIn_R)
    message.eyeLookOut_L !== undefined && (obj.eyeLookOut_L = message.eyeLookOut_L)
    message.eyeLookOut_R !== undefined && (obj.eyeLookOut_R = message.eyeLookOut_R)
    message.eyeLookUp_L !== undefined && (obj.eyeLookUp_L = message.eyeLookUp_L)
    message.eyeLookUp_R !== undefined && (obj.eyeLookUp_R = message.eyeLookUp_R)
    message.eyeSquint_L !== undefined && (obj.eyeSquint_L = message.eyeSquint_L)
    message.eyeSquint_R !== undefined && (obj.eyeSquint_R = message.eyeSquint_R)
    message.eyeWide_L !== undefined && (obj.eyeWide_L = message.eyeWide_L)
    message.eyeWide_R !== undefined && (obj.eyeWide_R = message.eyeWide_R)
    message.jawLeft !== undefined && (obj.jawLeft = message.jawLeft)
    message.jawOpen !== undefined && (obj.jawOpen = message.jawOpen)
    message.jawRight !== undefined && (obj.jawRight = message.jawRight)
    message.mouthClose !== undefined && (obj.mouthClose = message.mouthClose)
    message.mouthDimple_L !== undefined && (obj.mouthDimple_L = message.mouthDimple_L)
    message.mouthDimple_R !== undefined && (obj.mouthDimple_R = message.mouthDimple_R)
    message.mouthFrown_L !== undefined && (obj.mouthFrown_L = message.mouthFrown_L)
    message.mouthFrown_R !== undefined && (obj.mouthFrown_R = message.mouthFrown_R)
    message.mouthFunnel !== undefined && (obj.mouthFunnel = message.mouthFunnel)
    message.mouthLeft !== undefined && (obj.mouthLeft = message.mouthLeft)
    message.mouthLowerDown_L !== undefined && (obj.mouthLowerDown_L = message.mouthLowerDown_L)
    message.mouthLowerDown_R !== undefined && (obj.mouthLowerDown_R = message.mouthLowerDown_R)
    message.mouthPress_L !== undefined && (obj.mouthPress_L = message.mouthPress_L)
    message.mouthPress_R !== undefined && (obj.mouthPress_R = message.mouthPress_R)
    message.mouthPucker !== undefined && (obj.mouthPucker = message.mouthPucker)
    message.mouthRight !== undefined && (obj.mouthRight = message.mouthRight)
    message.mouthRollLower !== undefined && (obj.mouthRollLower = message.mouthRollLower)
    message.mouthRollUpper !== undefined && (obj.mouthRollUpper = message.mouthRollUpper)
    message.mouthShrugLower !== undefined && (obj.mouthShrugLower = message.mouthShrugLower)
    message.mouthShrugUpper !== undefined && (obj.mouthShrugUpper = message.mouthShrugUpper)
    message.mouthSmile_L !== undefined && (obj.mouthSmile_L = message.mouthSmile_L)
    message.mouthSmile_R !== undefined && (obj.mouthSmile_R = message.mouthSmile_R)
    message.mouthStretch_L !== undefined && (obj.mouthStretch_L = message.mouthStretch_L)
    message.mouthStretch_R !== undefined && (obj.mouthStretch_R = message.mouthStretch_R)
    message.mouthUpperUp_L !== undefined && (obj.mouthUpperUp_L = message.mouthUpperUp_L)
    message.mouthUpperUp_R !== undefined && (obj.mouthUpperUp_R = message.mouthUpperUp_R)
    message.noseSneer_L !== undefined && (obj.noseSneer_L = message.noseSneer_L)
    message.noseSneer_R !== undefined && (obj.noseSneer_R = message.noseSneer_R)
    message.cheekPuff !== undefined && (obj.cheekPuff = message.cheekPuff)
    message.jawForward !== undefined && (obj.jawForward = message.jawForward)
    message.tongueOut !== undefined && (obj.tongueOut = message.tongueOut)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<BlendShapes>, I>>(object: I): BlendShapes {
    const message = createBaseBlendShapes()
    message.browDown_L = object.browDown_L ?? 0
    message.browDown_R = object.browDown_R ?? 0
    message.browInnerUp = object.browInnerUp ?? 0
    message.browOuterUp_L = object.browOuterUp_L ?? 0
    message.browOuterUp_R = object.browOuterUp_R ?? 0
    message.cheekSquint_L = object.cheekSquint_L ?? 0
    message.cheekSquint_R = object.cheekSquint_R ?? 0
    message.eyeBlink_L = object.eyeBlink_L ?? 0
    message.eyeBlink_R = object.eyeBlink_R ?? 0
    message.eyeLookDown_L = object.eyeLookDown_L ?? 0
    message.eyeLookDown_R = object.eyeLookDown_R ?? 0
    message.eyeLookIn_L = object.eyeLookIn_L ?? 0
    message.eyeLookIn_R = object.eyeLookIn_R ?? 0
    message.eyeLookOut_L = object.eyeLookOut_L ?? 0
    message.eyeLookOut_R = object.eyeLookOut_R ?? 0
    message.eyeLookUp_L = object.eyeLookUp_L ?? 0
    message.eyeLookUp_R = object.eyeLookUp_R ?? 0
    message.eyeSquint_L = object.eyeSquint_L ?? 0
    message.eyeSquint_R = object.eyeSquint_R ?? 0
    message.eyeWide_L = object.eyeWide_L ?? 0
    message.eyeWide_R = object.eyeWide_R ?? 0
    message.jawLeft = object.jawLeft ?? 0
    message.jawOpen = object.jawOpen ?? 0
    message.jawRight = object.jawRight ?? 0
    message.mouthClose = object.mouthClose ?? 0
    message.mouthDimple_L = object.mouthDimple_L ?? 0
    message.mouthDimple_R = object.mouthDimple_R ?? 0
    message.mouthFrown_L = object.mouthFrown_L ?? 0
    message.mouthFrown_R = object.mouthFrown_R ?? 0
    message.mouthFunnel = object.mouthFunnel ?? 0
    message.mouthLeft = object.mouthLeft ?? 0
    message.mouthLowerDown_L = object.mouthLowerDown_L ?? 0
    message.mouthLowerDown_R = object.mouthLowerDown_R ?? 0
    message.mouthPress_L = object.mouthPress_L ?? 0
    message.mouthPress_R = object.mouthPress_R ?? 0
    message.mouthPucker = object.mouthPucker ?? 0
    message.mouthRight = object.mouthRight ?? 0
    message.mouthRollLower = object.mouthRollLower ?? 0
    message.mouthRollUpper = object.mouthRollUpper ?? 0
    message.mouthShrugLower = object.mouthShrugLower ?? 0
    message.mouthShrugUpper = object.mouthShrugUpper ?? 0
    message.mouthSmile_L = object.mouthSmile_L ?? 0
    message.mouthSmile_R = object.mouthSmile_R ?? 0
    message.mouthStretch_L = object.mouthStretch_L ?? 0
    message.mouthStretch_R = object.mouthStretch_R ?? 0
    message.mouthUpperUp_L = object.mouthUpperUp_L ?? 0
    message.mouthUpperUp_R = object.mouthUpperUp_R ?? 0
    message.noseSneer_L = object.noseSneer_L ?? 0
    message.noseSneer_R = object.noseSneer_R ?? 0
    message.cheekPuff = object.cheekPuff ?? 0
    message.jawForward = object.jawForward ?? 0
    message.tongueOut = object.tongueOut ?? 0
    return message
  }
}

function createBaseRotation(): Rotation {
  return { pitch: undefined, roll: undefined, yaw: undefined }
}

export const Rotation = {
  encode(message: Rotation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pitch !== undefined) {
      writer.uint32(13).float(message.pitch)
    }
    if (message.roll !== undefined) {
      writer.uint32(21).float(message.roll)
    }
    if (message.yaw !== undefined) {
      writer.uint32(29).float(message.yaw)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Rotation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseRotation()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pitch = reader.float()
          break
        case 2:
          message.roll = reader.float()
          break
        case 3:
          message.yaw = reader.float()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Rotation {
    return {
      pitch: isSet(object.pitch) ? Number(object.pitch) : undefined,
      roll: isSet(object.roll) ? Number(object.roll) : undefined,
      yaw: isSet(object.yaw) ? Number(object.yaw) : undefined
    }
  },

  toJSON(message: Rotation): unknown {
    const obj: any = {}
    message.pitch !== undefined && (obj.pitch = message.pitch)
    message.roll !== undefined && (obj.roll = message.roll)
    message.yaw !== undefined && (obj.yaw = message.yaw)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Rotation>, I>>(object: I): Rotation {
    const message = createBaseRotation()
    message.pitch = object.pitch ?? undefined
    message.roll = object.roll ?? undefined
    message.yaw = object.yaw ?? undefined
    return message
  }
}

function createBaseTransform(): Transform {
  return { x: undefined, y: undefined, z: undefined }
}

export const Transform = {
  encode(message: Transform, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== undefined) {
      writer.uint32(13).float(message.x)
    }
    if (message.y !== undefined) {
      writer.uint32(21).float(message.y)
    }
    if (message.z !== undefined) {
      writer.uint32(29).float(message.z)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Transform {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseTransform()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.x = reader.float()
          break
        case 2:
          message.y = reader.float()
          break
        case 3:
          message.z = reader.float()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Transform {
    return {
      x: isSet(object.x) ? Number(object.x) : undefined,
      y: isSet(object.y) ? Number(object.y) : undefined,
      z: isSet(object.z) ? Number(object.z) : undefined
    }
  },

  toJSON(message: Transform): unknown {
    const obj: any = {}
    message.x !== undefined && (obj.x = message.x)
    message.y !== undefined && (obj.y = message.y)
    message.z !== undefined && (obj.z = message.z)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<Transform>, I>>(object: I): Transform {
    const message = createBaseTransform()
    message.x = object.x ?? undefined
    message.y = object.y ?? undefined
    message.z = object.z ?? undefined
    return message
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

type KeysOfUnion<T> = T extends T ? keyof T : never
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined
}
