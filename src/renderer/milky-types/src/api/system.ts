import { z } from 'zod';
import { ZInt32, ZInt64, ZString, ZBoolean } from '../scalar';
import { FriendEntity, GroupEntity, GroupMemberEntity } from '../common';
import { milkyVersion } from '../constants';

// 缓存 API 基础
export const CachedApiBase = z.object({
  no_cache: ZBoolean.default(false).describe('是否强制不使用缓存'),
});

// 获取登录信息输出
export const GetLoginInfoOutput = z.object({
  uin: ZInt64.describe('登录 QQ 号'),
  nickname: ZString.describe('登录昵称'),
});

// 获取协议端信息输出
export const GetImplInfoOutput = z.object({
  impl_name: ZString.describe('协议端名称'),
  impl_version: ZString.describe('协议端版本'),
  qq_protocol_version: ZString.describe('协议端使用的 QQ 协议版本'),
  qq_protocol_type: z.enum([
    'windows',
    'linux',
    'macos',
    'android_pad',
    'android_phone',
    'ipad',
    'iphone',
    'harmony',
    'watch'
  ]).describe('协议端使用的 QQ 协议平台'),
  milky_version: ZString.describe(`协议端实现的 Milky 协议版本，目前为 "${milkyVersion}"`),
});

// 获取用户个人信息输入
export const GetUserProfileInput = z.object({
  user_id: ZInt64.describe('用户 QQ 号'),
});

// 获取用户个人信息输出
export const GetUserProfileOutput = z.object({
  nickname: ZString.describe('昵称'),
  qid: ZString.optional().describe('QID'),
  age: ZInt32.describe('年龄'),
  sex: z.enum(['male', 'female', 'unknown']).describe('性别'),
  remark: ZString.optional().describe('备注'),
  bio: ZString.optional().describe('个性签名'),
  level: ZInt32.optional().describe('QQ 等级'),
  country: ZString.optional().describe('国家或地区'),
  city: ZString.optional().describe('城市'),
  school: ZString.optional().describe('学校'),
});

// 获取好友列表输入
export const GetFriendListInput = CachedApiBase;

// 获取好友列表输出
export const GetFriendListOutput = z.object({
  friends: z.array(z.lazy(() => FriendEntity)).describe('好友列表'),
});

// 获取好友信息输入
export const GetFriendInfoInput = z.object({
  user_id: ZInt64.describe('好友 QQ 号'),
}).extend(CachedApiBase.shape);

// 获取好友信息输出
export const GetFriendInfoOutput = z.object({
  friend: z.lazy(() => FriendEntity).describe('好友信息'),
});

// 获取群列表输入
export const GetGroupListInput = CachedApiBase;

// 获取群列表输出
export const GetGroupListOutput = z.object({
  groups: z.array(z.lazy(() => GroupEntity)).describe('群列表'),
});

// 获取群信息输入
export const GetGroupInfoInput = z.object({
  group_id: ZInt64.describe('群号'),
}).extend(CachedApiBase.shape);

// 获取群信息输出
export const GetGroupInfoOutput = z.object({
  group: z.lazy(() => GroupEntity).describe('群信息'),
});

// 获取群成员列表输入
export const GetGroupMemberListInput = z.object({
  group_id: ZInt64.describe('群号'),
}).extend(CachedApiBase.shape);

// 获取群成员列表输出
export const GetGroupMemberListOutput = z.object({
  members: z.array(z.lazy(() => GroupMemberEntity)).describe('群成员列表'),
});

// 获取群成员信息输入
export const GetGroupMemberInfoInput = z.object({
  group_id: ZInt64.describe('群号'),
  user_id: ZInt64.describe('群成员 QQ 号'),
}).extend(CachedApiBase.shape);

// 获取群成员信息输出
export const GetGroupMemberInfoOutput = z.object({
  member: z.lazy(() => GroupMemberEntity).describe('群成员信息'),
});

export const GetCookiesInput = z.object({
  domain: ZString.describe('需要获取 Cookies 的域名'),
});

export const GetCookiesOutput = z.object({
  cookies: ZString.describe('域名对应的 Cookies 字符串'),
});

export const GetCSRFTokenOutput = z.object({
  csrf_token: ZString.describe('CSRF Token'),
});

// 导出类型
export type CachedApiBase = z.infer<typeof CachedApiBase>;
export type GetLoginInfoOutput = z.infer<typeof GetLoginInfoOutput>;
export type GetImplInfoOutput = z.infer<typeof GetImplInfoOutput>;
export type GetUserProfileInput = z.infer<typeof GetUserProfileInput>;
export type GetUserProfileOutput = z.infer<typeof GetUserProfileOutput>;
export type GetFriendListInput = z.infer<typeof GetFriendListInput>;
export type GetFriendListOutput = z.infer<typeof GetFriendListOutput>;
export type GetFriendInfoInput = z.infer<typeof GetFriendInfoInput>;
export type GetFriendInfoOutput = z.infer<typeof GetFriendInfoOutput>;
export type GetGroupListInput = z.infer<typeof GetGroupListInput>;
export type GetGroupListOutput = z.infer<typeof GetGroupListOutput>;
export type GetGroupInfoInput = z.infer<typeof GetGroupInfoInput>;
export type GetGroupInfoOutput = z.infer<typeof GetGroupInfoOutput>;
export type GetGroupMemberListInput = z.infer<typeof GetGroupMemberListInput>;
export type GetGroupMemberListOutput = z.infer<typeof GetGroupMemberListOutput>;
export type GetGroupMemberInfoInput = z.infer<typeof GetGroupMemberInfoInput>;
export type GetGroupMemberInfoOutput = z.infer<typeof GetGroupMemberInfoOutput>;
export type GetCookiesInput = z.infer<typeof GetCookiesInput>;
export type GetCookiesOutput = z.infer<typeof GetCookiesOutput>;
export type GetCSRFTokenOutput = z.infer<typeof GetCSRFTokenOutput>;
