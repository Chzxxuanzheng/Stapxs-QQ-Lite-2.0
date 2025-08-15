import { z } from 'zod';
import { ZInt32, ZInt64, ZString, ZBoolean } from './scalar';
import { FriendRequest, GroupRequest, GroupInvitation } from './common';
import { IncomingMessage } from './message';

// 机器人离线事件
export const BotOfflineEvent = z.object({
  reason: ZString.describe('下线原因'),
}).describe('机器人离线事件');

// 消息撤回事件
export const MessageRecallEvent = z.object({
  message_scene: z.enum(['friend', 'group', 'temp']).describe('消息场景'),
  peer_id: ZInt64.describe('好友 QQ 号或群号'),
  message_seq: ZInt64.describe('消息序列号'),
  sender_id: ZInt64.describe('被撤回的消息的发送者 QQ 号'),
  operator_id: ZInt64.describe('操作者 QQ 号'),
}).describe('消息撤回事件');

// 好友戳一戳事件
export const FriendNudgeEvent = z.object({
  user_id: ZInt64.describe('好友 QQ 号'),
  is_self_send: ZBoolean.describe('是否是自己发送的戳一戳'),
  is_self_receive: ZBoolean.describe('是否是自己接收的戳一戳'),
}).describe('好友戳一戳事件');

// 好友文件上传事件
export const FriendFileUploadEvent = z.object({
  user_id: ZInt64.describe('好友 QQ 号'),
  file_id: ZString.describe('文件 ID'),
  file_name: ZString.describe('文件名称'),
  file_size: ZInt64.describe('文件大小'),
  is_self: ZBoolean.describe('是否是自己发送的文件'),
}).describe('好友文件上传事件');

// 群管理员变更事件
export const GroupAdminChangeEvent = z.object({
  group_id: ZInt64.describe('群号'),
  user_id: ZInt64.describe('发生变更的用户 QQ 号'),
  is_set: ZBoolean.describe('是否被设置为管理员，`false` 表示被取消管理员'),
}).describe('群管理员变更事件');

// 群精华消息变更事件
export const GroupEssenceMessageChangeEvent = z.object({
  group_id: ZInt64.describe('群号'),
  message_seq: ZInt64.describe('发生变更的消息序列号'),
  is_set: ZBoolean.describe('是否被设置为精华，`false` 表示被取消精华'),
}).describe('群精华消息变更事件');

// 群成员增加事件
export const GroupMemberIncreaseEvent = z.object({
  group_id: ZInt64.describe('群号'),
  user_id: ZInt64.describe('发生变更的用户 QQ 号'),
  operator_id: ZInt64.optional().describe('管理员 QQ 号，如果是管理员同意入群'),
  invitor_id: ZInt64.optional().describe('邀请者 QQ 号，如果是邀请入群'),
}).describe('群成员增加事件');

// 群成员减少事件
export const GroupMemberDecreaseEvent = z.object({
  group_id: ZInt64.describe('群号'),
  user_id: ZInt64.describe('发生变更的用户 QQ 号'),
  operator_id: ZInt64.optional().describe('管理员 QQ 号，如果是管理员踢出'),
}).describe('群成员减少事件');

// 群名称变更事件
export const GroupNameChangeEvent = z.object({
  group_id: ZInt64.describe('群号'),
  new_group_name: ZString.describe('新的群名称'),
  operator_id: ZInt64.describe('操作者 QQ 号'),
}).describe('群名称变更事件');

// 群消息反应事件
export const GroupMessageReactionEvent = z.object({
  group_id: ZInt64.describe('群号'),
  user_id: ZInt64.describe('发送回应者 QQ 号'),
  message_seq: ZInt64.describe('消息序列号'),
  face_id: ZString.describe('表情 ID'),
  is_add: ZBoolean.describe('是否为添加，`false` 表示取消回应'),
}).describe('群消息反应事件');

// 群禁言事件
export const GroupMuteEvent = z.object({
  group_id: ZInt64.describe('群号'),
  user_id: ZInt64.describe('发生变更的用户 QQ 号'),
  operator_id: ZInt64.describe('操作者 QQ 号'),
  duration: ZInt32.describe('禁言时长（秒），为 0 表示取消禁言'),
}).describe('群禁言事件');

// 群全体禁言事件
export const GroupWholeMuteEvent = z.object({
  group_id: ZInt64.describe('群号'),
  operator_id: ZInt64.describe('操作者 QQ 号'),
  is_mute: ZBoolean.describe('是否全员禁言，`false` 表示取消全员禁言'),
}).describe('群全体禁言事件');

// 群戳一戳事件
export const GroupNudgeEvent = z.object({
  group_id: ZInt64.describe('群号'),
  sender_id: ZInt64.describe('发送者 QQ 号'),
  receiver_id: ZInt64.describe('接收者 QQ 号'),
}).describe('群戳一戳事件');

// 群文件上传事件
export const GroupFileUploadEvent = z.object({
  group_id: ZInt64.describe('群号'),
  user_id: ZInt64.describe('发送者 QQ 号'),
  file_id: ZString.describe('文件 ID'),
  file_name: ZString.describe('文件名称'),
  file_size: ZInt64.describe('文件大小'),
}).describe('群文件上传事件');

// 主事件类型
export const Event = z.discriminatedUnion('event_type', [
  // 机器人离线事件
  z.object({
    event_type: z.literal('bot_offline'),
    time: ZInt64.describe('事件 Unix 时间戳（秒）'),
    self_id: ZInt64.describe('机器人 QQ 号'),
    data: BotOfflineEvent,
  }).describe('机器人离线事件'),

  // 消息接收事件
  z.object({
    event_type: z.literal('message_receive'),
    time: ZInt64.describe('事件 Unix 时间戳（秒）'),
    self_id: ZInt64.describe('机器人 QQ 号'),
    data: IncomingMessage,
  }).describe('消息接收事件'),

  // 消息撤回事件
  z.object({
    event_type: z.literal('message_recall'),
    time: ZInt64.describe('事件 Unix 时间戳（秒）'),
    self_id: ZInt64.describe('机器人 QQ 号'),
    data: MessageRecallEvent,
  }).describe('消息撤回事件'),

  // 好友请求事件
  z.object({
    event_type: z.literal('friend_request'),
    time: ZInt64.describe('事件 Unix 时间戳（秒）'),
    self_id: ZInt64.describe('机器人 QQ 号'),
    data: FriendRequest,
  }).describe('好友请求事件'),

  // 群请求事件
  z.object({
    event_type: z.literal('group_request'),
    time: ZInt64.describe('事件 Unix 时间戳（秒）'),
    self_id: ZInt64.describe('机器人 QQ 号'),
    data: GroupRequest,
  }).describe('群请求事件'),

  // 群邀请事件
  z.object({
    event_type: z.literal('group_invitation'),
    time: ZInt64.describe('事件 Unix 时间戳（秒）'),
    self_id: ZInt64.describe('机器人 QQ 号'),
    data: GroupInvitation,
  }).describe('群邀请事件'),

  // 好友戳一戳事件
  z.object({
    event_type: z.literal('friend_nudge'),
    time: ZInt64.describe('事件 Unix 时间戳（秒）'),
    self_id: ZInt64.describe('机器人 QQ 号'),
    data: FriendNudgeEvent,
  }).describe('好友戳一戳事件'),

  // 好友文件上传事件
  z.object({
    event_type: z.literal('friend_file_upload'),
    time: ZInt64.describe('事件 Unix 时间戳（秒）'),
    self_id: ZInt64.describe('机器人 QQ 号'),
    data: FriendFileUploadEvent,
  }).describe('好友文件上传事件'),

  // 群管理员变更事件
  z.object({
    event_type: z.literal('group_admin_change'),
    time: ZInt64.describe('事件 Unix 时间戳（秒）'),
    self_id: ZInt64.describe('机器人 QQ 号'),
    data: GroupAdminChangeEvent,
  }).describe('群管理员变更事件'),

  // 群精华消息变更事件
  z.object({
    event_type: z.literal('group_essence_message_change'),
    time: ZInt64.describe('事件 Unix 时间戳（秒）'),
    self_id: ZInt64.describe('机器人 QQ 号'),
    data: GroupEssenceMessageChangeEvent,
  }).describe('群精华消息变更事件'),

  // 群成员增加事件
  z.object({
    event_type: z.literal('group_member_increase'),
    time: ZInt64.describe('事件 Unix 时间戳（秒）'),
    self_id: ZInt64.describe('机器人 QQ 号'),
    data: GroupMemberIncreaseEvent,
  }).describe('群成员增加事件'),

  // 群成员减少事件
  z.object({
    event_type: z.literal('group_member_decrease'),
    time: ZInt64.describe('事件 Unix 时间戳（秒）'),
    self_id: ZInt64.describe('机器人 QQ 号'),
    data: GroupMemberDecreaseEvent,
  }).describe('群成员减少事件'),

  // 群名称变更事件
  z.object({
    event_type: z.literal('group_name_change'),
    time: ZInt64.describe('事件 Unix 时间戳（秒）'),
    self_id: ZInt64.describe('机器人 QQ 号'),
    data: GroupNameChangeEvent,
  }).describe('群名称变更事件'),

  // 群消息表情回应事件
  z.object({
    event_type: z.literal('group_message_reaction'),
    time: ZInt64.describe('事件 Unix 时间戳（秒）'),
    self_id: ZInt64.describe('机器人 QQ 号'),
    data: GroupMessageReactionEvent,
  }).describe('群消息表情回应事件'),

  // 群禁言事件
  z.object({
    event_type: z.literal('group_mute'),
    time: ZInt64.describe('事件 Unix 时间戳（秒）'),
    self_id: ZInt64.describe('机器人 QQ 号'),
    data: GroupMuteEvent,
  }).describe('群禁言事件'),

  // 群全体禁言事件
  z.object({
    event_type: z.literal('group_whole_mute'),
    time: ZInt64.describe('事件 Unix 时间戳（秒）'),
    self_id: ZInt64.describe('机器人 QQ 号'),
    data: GroupWholeMuteEvent,
  }).describe('群全体禁言事件'),

  // 群戳一戳事件
  z.object({
    event_type: z.literal('group_nudge'),
    time: ZInt64.describe('事件 Unix 时间戳（秒）'),
    self_id: ZInt64.describe('机器人 QQ 号'),
    data: GroupNudgeEvent,
  }).describe('群戳一戳事件'),

  // 群文件上传事件
  z.object({
    event_type: z.literal('group_file_upload'),
    time: ZInt64.describe('事件 Unix 时间戳（秒）'),
    self_id: ZInt64.describe('机器人 QQ 号'),
    data: GroupFileUploadEvent,
  }).describe('群文件上传事件'),
]).describe('事件');

// 导出类型
export type BotOfflineEvent = z.infer<typeof BotOfflineEvent>;
export type MessageRecallEvent = z.infer<typeof MessageRecallEvent>;
export type FriendNudgeEvent = z.infer<typeof FriendNudgeEvent>;
export type FriendFileUploadEvent = z.infer<typeof FriendFileUploadEvent>;
export type GroupAdminChangeEvent = z.infer<typeof GroupAdminChangeEvent>;
export type GroupEssenceMessageChangeEvent = z.infer<typeof GroupEssenceMessageChangeEvent>;
export type GroupMemberIncreaseEvent = z.infer<typeof GroupMemberIncreaseEvent>;
export type GroupMemberDecreaseEvent = z.infer<typeof GroupMemberDecreaseEvent>;
export type GroupNameChangeEvent = z.infer<typeof GroupNameChangeEvent>;
export type GroupMessageReactionEvent = z.infer<typeof GroupMessageReactionEvent>;
export type GroupMuteEvent = z.infer<typeof GroupMuteEvent>;
export type GroupWholeMuteEvent = z.infer<typeof GroupWholeMuteEvent>;
export type GroupNudgeEvent = z.infer<typeof GroupNudgeEvent>;
export type GroupFileUploadEvent = z.infer<typeof GroupFileUploadEvent>;
export type Event = z.infer<typeof Event>;
