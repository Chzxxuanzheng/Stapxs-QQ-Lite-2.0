import { z } from 'zod';
import { ZInt64, ZString, ZBoolean } from '../scalar';
import { GroupAnnouncementEntity } from '../common';

// 图片 API 基础
export const PictureApiBase = z.object({
  image_uri: ZString.describe('图像文件 URI，支持 `file://` `http(s)://` `base64://` 三种格式'),
});

// 设置群名称输入
export const SetGroupNameInput = z.object({
  group_id: ZInt64.describe('群号'),
  new_group_name: ZString.describe('新群名称'),
});

// 设置群头像输入
export const SetGroupAvatarInput = z.object({
  group_id: ZInt64.describe('群号'),
}).extend(PictureApiBase.shape);

// 设置群名片输入
export const SetGroupMemberCardInput = z.object({
  group_id: ZInt64.describe('群号'),
  user_id: ZInt64.describe('被设置的群成员 QQ 号'),
  card: ZString.describe('新群名片'),
});

// 设置群成员专属头衔输入
export const SetGroupMemberSpecialTitleInput = z.object({
  group_id: ZInt64.describe('群号'),
  user_id: ZInt64.describe('被设置的群成员 QQ 号'),
  special_title: ZString.describe('新专属头衔'),
});

// 设置群管理员输入
export const SetGroupMemberAdminInput = z.object({
  group_id: ZInt64.describe('群号'),
  user_id: ZInt64.describe('被设置的 QQ 号'),
  is_set: ZBoolean.default(true).describe('是否设置为管理员，`false` 为取消管理员'),
});

// 设置群成员禁言输入
export const SetGroupMemberMuteInput = z.object({
  group_id: ZInt64.describe('群号'),
  user_id: ZInt64.describe('被设置的 QQ 号'),
  duration: ZInt64.default(0).describe('禁言持续时间（秒），设为 `0` 为取消禁言'),
});

// 设置群全员禁言输入
export const SetGroupWholeMuteInput = z.object({
  group_id: ZInt64.describe('群号'),
  is_mute: ZBoolean.default(true).describe('是否开启全员禁言，`false` 为取消全员禁言'),
});

// 踢出群成员输入
export const KickGroupMemberInput = z.object({
  group_id: ZInt64.describe('群号'),
  user_id: ZInt64.describe('被踢的 QQ 号'),
  reject_add_request: ZBoolean.default(true).describe('是否拒绝加群申请，`false` 为不拒绝'),
});

// 获取群公告列表输入
export const GetGroupAnnouncementListInput = z.object({
  group_id: ZInt64.describe('群号'),
});

// 获取群公告列表输出
export const GetGroupAnnouncementListOutput = z.object({
  announcements: z.array(z.lazy(() => GroupAnnouncementEntity)).describe('群公告列表'),
});

// 发送群公告输入
export const SendGroupAnnouncementInput = z.object({
  group_id: ZInt64.describe('群号'),
  content: ZString.describe('公告内容'),
}).extend(PictureApiBase.shape);

// 删除群公告输入
export const DeleteGroupAnnouncementInput = z.object({
  group_id: ZInt64.describe('群号'),
  announcement_id: ZString.describe('公告 ID'),
});

// 退出群输入
export const QuitGroupInput = z.object({
  group_id: ZInt64.describe('群号'),
});

// 发送群消息表情回应输入
export const SendGroupMessageReactionInput = z.object({
  group_id: ZInt64.describe('群号'),
  message_seq: ZInt64.describe('要回应的消息序列号'),
  reaction: ZString.describe('表情 ID'),
  is_add: ZBoolean.default(true).describe('是否添加表情，`false` 为取消'),
});

// 发送群戳一戳输入
export const SendGroupNudgeInput = z.object({
  group_id: ZInt64.describe('群号'),
  user_id: ZInt64.describe('被戳的群成员 QQ 号'),
});

// 导出类型
export type PictureApiBase = z.infer<typeof PictureApiBase>;
export type SetGroupNameInput = z.infer<typeof SetGroupNameInput>;
export type SetGroupAvatarInput = z.infer<typeof SetGroupAvatarInput>;
export type SetGroupMemberCardInput = z.infer<typeof SetGroupMemberCardInput>;
export type SetGroupMemberSpecialTitleInput = z.infer<typeof SetGroupMemberSpecialTitleInput>;
export type SetGroupMemberAdminInput = z.infer<typeof SetGroupMemberAdminInput>;
export type SetGroupMemberMuteInput = z.infer<typeof SetGroupMemberMuteInput>;
export type SetGroupWholeMuteInput = z.infer<typeof SetGroupWholeMuteInput>;
export type KickGroupMemberInput = z.infer<typeof KickGroupMemberInput>;
export type GetGroupAnnouncementListInput = z.infer<typeof GetGroupAnnouncementListInput>;
export type GetGroupAnnouncementListOutput = z.infer<typeof GetGroupAnnouncementListOutput>;
export type SendGroupAnnouncementInput = z.infer<typeof SendGroupAnnouncementInput>;
export type DeleteGroupAnnouncementInput = z.infer<typeof DeleteGroupAnnouncementInput>;
export type QuitGroupInput = z.infer<typeof QuitGroupInput>;
export type SendGroupMessageReactionInput = z.infer<typeof SendGroupMessageReactionInput>;
export type SendGroupNudgeInput = z.infer<typeof SendGroupNudgeInput>;
