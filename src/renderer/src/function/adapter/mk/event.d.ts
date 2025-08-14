import { Event as E } from '@milky/types/event'


// ...existing code...

// 事件类型映射工具类型
type EventTypeMap<T> = T extends { event_type: infer K }
    ? K extends string
    ? { [P in K]: T }
    : never
    : never;


export type BotOffline = Extract<E, { event_type: 'bot_offline' }>
export type MessageReceive = Extract<E, { event_type: 'message_receive' }>
export type MessageRecall = Extract<E, { event_type: 'message_recall' }>
export type FriendRequest = Extract<E, { event_type: 'friend_request' }>
export type GroupRequest = Extract<E, { event_type: 'group_request' }>
export type GroupInvitation = Extract<E, { event_type: 'group_invitation' }>
export type FriendNudge = Extract<E, { event_type: 'friend_nudge' }>
export type FriendFileUpload = Extract<E, { event_type: 'friend_file_upload' }>
export type GroupAdminChange = Extract<E, { event_type: 'group_admin_change' }>
export type GroupEssenceMessageChange = Extract<E, { event_type: 'group_essence_message_change' }>
export type GroupMemberIncrease = Extract<E, { event_type: 'group_member_increase' }>
export type GroupMemberDecrease = Extract<E, { event_type: 'group_member_decrease' }>
export type GroupNameChange = Extract<E, { event_type: 'group_name_change' }>
export type GroupMessageReaction = Extract<E, { event_type: 'group_message_reaction' }>
export type GroupMute = Extract<E, { event_type: 'group_mute' }>
export type GroupWholeMute = Extract<E, { event_type: 'group_whole_mute' }>
export type GroupNudge = Extract<E, { event_type: 'group_nudge' }>
export type GroupFileUpload = Extract<E, { event_type: 'group_file_upload' }>
