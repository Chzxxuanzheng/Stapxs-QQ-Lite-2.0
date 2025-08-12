import { z } from 'zod';
import { ZInt32, ZInt64, ZString } from './scalar';
import { FriendEntity, GroupEntity, GroupMemberEntity } from './common';

// 共享消息段基础
export const SharedSegment = z.object({
  type: ZString.describe('消息段类型'),
}).describe('共享消息段基础');

// 接收资源消息段基础
export const IncomingResourceSegmentBase = z.object({
  resource_id: ZString.describe('资源 ID'),
  temp_url: ZString.describe('临时 URL'),
}).describe('接收资源消息段基础');

// 发送资源消息段基础
export const OutgoingResourceSegmentBase = z.object({
  uri: ZString.describe('文件 URI，支持 `file://` `http(s)://` `base64://` 三种格式'),
}).describe('发送资源消息段基础');

// 接收消息段
export const IncomingSegment = z.discriminatedUnion('type', [
  // 文本消息段
  z.object({
    type: z.literal('text'),
    data: z.object({
      text: ZString.describe('文本内容'),
    }).describe('文本消息段'),
  }).describe('文本消息段'),
  
  // 提及（@）消息段
  z.object({
    type: z.literal('mention'),
    data: z.object({
      user_id: ZInt64.describe('提及的 QQ 号'),
    }).describe('提及消息段'),
  }).describe('提及消息段'),
  
  // 提及全体（@全体成员）消息段
  z.object({
    type: z.literal('mention_all'),
    data: z.object({}).describe('提及全体消息段'),
  }).describe('提及全体消息段'),
  
  // 表情消息段
  z.object({
    type: z.literal('face'),
    data: z.object({
      face_id: ZString.describe('表情 ID'),
    }).describe('表情消息段'),
  }).describe('表情消息段'),
  
  // 回复消息段
  z.object({
    type: z.literal('reply'),
    data: z.object({
      message_seq: ZInt64.describe('被引用的消息序列号'),
    }).describe('回复消息段'),
  }).describe('回复消息段'),
  
  // 图片消息段
  z.object({
    type: z.literal('image'),
    data: IncomingResourceSegmentBase.extend({
      summary: ZString.optional().describe('图片预览文本'),
      sub_type: z.enum(['normal', 'sticker']).describe('图片类型'),
    }).describe('图片消息段'),
  }).describe('图片消息段'),
  
  // 语音消息段
  z.object({
    type: z.literal('record'),
    data: IncomingResourceSegmentBase.extend({
      duration: ZInt32.describe('语音时长（秒）'),
    }).describe('语音消息段'),
  }).describe('语音消息段'),
  
  // 视频消息段
  z.object({
    type: z.literal('video'),
    data: IncomingResourceSegmentBase.describe('视频消息段'),
  }).describe('视频消息段'),
  
  // 合并转发消息段
  z.object({
    type: z.literal('forward'),
    data: z.object({
      forward_id: ZString.describe('合并转发 ID'),
    }).describe('合并转发消息段'),
  }).describe('合并转发消息段'),
  
  // 市场表情消息段
  z.object({
    type: z.literal('market_face'),
    data: z.object({
      url: ZString.describe('市场表情 URL'),
    }).describe('市场表情消息段'),
  }).describe('市场表情消息段'),
  
  // 小程序消息段
  z.object({
    type: z.literal('light_app'),
    data: z.object({
      app_name: ZString.describe('小程序名称'),
      json_payload: ZString.describe('小程序 JSON 数据'),
    }).describe('小程序消息段'),
  }).describe('小程序消息段'),
  
  // XML 消息段
  z.object({
    type: z.literal('xml'),
    data: z.object({
      service_id: ZInt32.describe('服务 ID'),
      xml_payload: ZString.describe('XML 数据'),
    }).describe('XML 消息段'),
  }).describe('XML 消息段'),
]).describe('接收消息段');

// 合并转发消息
export const IncomingForwardedMessage = z.object({
  sender_name: ZString.describe('发送者名称'),
  avatar_url: ZString.describe('发送者头像 URL'),
  time: ZInt64.describe('消息 Unix 时间戳（秒）'),
  segments: z.array(z.lazy(() => IncomingSegment)).describe('消息段列表'),
}).describe('接收转发消息');

// 发送消息段
export const OutgoingSegment = z.discriminatedUnion('type', [
  // 文本消息段
  z.object({
    type: z.literal('text'),
    data: z.object({
      text: ZString.describe('文本内容'),
    }).describe('文本消息段'),
  }).describe('文本消息段'),
  
  // 提及（@）消息段
  z.object({
    type: z.literal('mention'),
    data: z.object({
      user_id: ZInt64.describe('提及的 QQ 号'),
    }).describe('提及消息段'),
  }).describe('提及消息段'),
  
  // 提及全体（@全体成员）消息段
  z.object({
    type: z.literal('mention_all'),
    data: z.object({}).describe('提及全体消息段'),
  }).describe('提及全体消息段'),
  
  // 表情消息段
  z.object({
    type: z.literal('face'),
    data: z.object({
      face_id: ZString.describe('表情 ID'),
    }).describe('表情消息段'),
  }).describe('表情消息段'),
  
  // 回复消息段
  z.object({
    type: z.literal('reply'),
    data: z.object({
      message_seq: ZInt64.describe('被引用的消息序列号'),
    }).describe('回复消息段'),
  }).describe('回复消息段'),
  
  // 图片消息段
  z.object({
    type: z.literal('image'),
    data: OutgoingResourceSegmentBase.extend({
      summary: ZString.optional().describe('图片预览文本'),
      sub_type: z.enum(['normal', 'sticker']).describe('图片类型'),
    }).describe('图片消息段'),
  }).describe('图片消息段'),
  
  // 语音消息段
  z.object({
    type: z.literal('record'),
    data: OutgoingResourceSegmentBase.describe('语音消息段'),
  }).describe('语音消息段'),
  
  // 视频消息段
  z.object({
    type: z.literal('video'),
    data: OutgoingResourceSegmentBase.extend({
      thumb_uri: ZString.optional().describe('封面图片 URI'),
    }).describe('视频消息段'),
  }).describe('视频消息段'),
  
  // 合并转发消息段
  z.object({
    type: z.literal('forward'),
    data: z.object({
      get messages() {
        return z.array(z.lazy(() => OutgoingForwardedMessage)).describe('合并转发消息段');
      }
    }).describe('合并转发消息段'),
  }).describe('合并转发消息段'),
]).describe('发送消息段');

// 发送转发消息
export const OutgoingForwardedMessage = z.object({
  user_id: ZInt64.describe('发送者 QQ 号'),
  sender_name: ZString.describe('发送者名称'),
  segments: z.array(z.lazy(() => OutgoingSegment)).describe('消息段列表'),
}).describe('发送转发消息');

// 接收消息
export const IncomingMessage = z.discriminatedUnion('message_scene', [
  // 好友消息
  z.object({
    message_scene: z.literal('friend'),
    peer_id: ZInt64.describe('好友 QQ 号或群号'),
    message_seq: ZInt64.describe('消息序列号'),
    sender_id: ZInt64.describe('发送者 QQ 号'),
    time: ZInt64.describe('消息 Unix 时间戳（秒）'),
    segments: z.array(z.lazy(() => IncomingSegment)).describe('消息段列表'),
    friend: z.lazy(() => FriendEntity).describe('好友信息'),
  }).describe('好友消息'),
  
  // 群消息
  z.object({
    message_scene: z.literal('group'),
    peer_id: ZInt64.describe('好友 QQ 号或群号'),
    message_seq: ZInt64.describe('消息序列号'),
    sender_id: ZInt64.describe('发送者 QQ 号'),
    time: ZInt64.describe('消息 Unix 时间戳（秒）'),
    segments: z.array(z.lazy(() => IncomingSegment)).describe('消息段列表'),
    group: z.lazy(() => GroupEntity).describe('群信息'),
    group_member: z.lazy(() => GroupMemberEntity).describe('群成员信息'),
  }).describe('群消息'),
  
  // 临时会话消息
  z.object({
    message_scene: z.literal('temp'),
    peer_id: ZInt64.describe('好友 QQ 号或群号'),
    message_seq: ZInt64.describe('消息序列号'),
    sender_id: ZInt64.describe('发送者 QQ 号'),
    time: ZInt64.describe('消息 Unix 时间戳（秒）'),
    segments: z.array(z.lazy(() => IncomingSegment)).describe('消息段列表'),
    group: z.lazy(() => GroupEntity).optional().describe('临时会话发送者的所在的群信息'),
  }).describe('临时会话消息'),
]).describe('接收消息');

// 导出类型
export type IncomingSegment = z.infer<typeof IncomingSegment>;
export type OutgoingSegment = z.infer<typeof OutgoingSegment>;
export type IncomingMessage = z.infer<typeof IncomingMessage>;
export type IncomingForwardedMessage = z.infer<typeof IncomingForwardedMessage>;
export type OutgoingForwardedMessage = z.infer<typeof OutgoingForwardedMessage>;
