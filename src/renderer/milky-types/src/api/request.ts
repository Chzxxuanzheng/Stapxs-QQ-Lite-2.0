import { z } from 'zod';
import { ZInt32, ZString } from '../scalar';
import { FriendRequest, GroupRequest, GroupInvitation } from '../common';

// 获取好友请求列表输入
export const GetFriendRequestsInput = z.object({
  limit: ZInt32.default(20).describe('获取的最大请求数量'),
});

// 获取好友请求列表输出
export const GetFriendRequestsOutput = z.object({
  requests: z.array(z.lazy(() => FriendRequest)).describe('好友请求列表'),
});

// 获取群请求列表输入
export const GetGroupRequestsInput = z.object({
  limit: ZInt32.default(20).describe('获取的最大请求数量'),
});

// 获取群请求列表输出
export const GetGroupRequestsOutput = z.object({
  requests: z.array(z.lazy(() => GroupRequest)).describe('群请求列表'),
});

// 获取群邀请列表输入
export const GetGroupInvitationsInput = z.object({
  limit: ZInt32.default(20).describe('获取的最大邀请数量'),
});

// 获取群邀请列表输出
export const GetGroupInvitationsOutput = z.object({
  invitations: z.array(z.lazy(() => GroupInvitation)).describe('群邀请列表'),
});

// 同意好友请求输入
export const AcceptFriendRequestInput = z.object({
  request_id: ZString.describe('请求 ID'),
});

// 拒绝好友请求输入
export const RejectFriendRequestInput = z.object({
  request_id: ZString.describe('请求 ID'),
  reason: ZString.optional().describe('拒绝理由'),
});

// 同意群请求输入
export const AcceptGroupRequestInput = z.object({
  request_id: ZString.describe('请求 ID'),
});

// 拒绝群请求输入
export const RejectGroupRequestInput = z.object({
  request_id: ZString.describe('请求 ID'),
  reason: ZString.optional().describe('拒绝理由'),
});

// 同意群邀请输入
export const AcceptGroupInvitationInput = z.object({
  request_id: ZString.describe('请求 ID'),
});

// 拒绝群邀请输入
export const RejectGroupInvitationInput = z.object({
  request_id: ZString.describe('请求 ID'),
});

// 导出类型
export type GetFriendRequestsInput = z.infer<typeof GetFriendRequestsInput>;
export type GetFriendRequestsOutput = z.infer<typeof GetFriendRequestsOutput>;
export type GetGroupRequestsInput = z.infer<typeof GetGroupRequestsInput>;
export type GetGroupRequestsOutput = z.infer<typeof GetGroupRequestsOutput>;
export type GetGroupInvitationsInput = z.infer<typeof GetGroupInvitationsInput>;
export type GetGroupInvitationsOutput = z.infer<typeof GetGroupInvitationsOutput>;
export type AcceptFriendRequestInput = z.infer<typeof AcceptFriendRequestInput>;
export type RejectFriendRequestInput = z.infer<typeof RejectFriendRequestInput>;
export type AcceptGroupRequestInput = z.infer<typeof AcceptGroupRequestInput>;
export type RejectGroupRequestInput = z.infer<typeof RejectGroupRequestInput>;
export type AcceptGroupInvitationInput = z.infer<typeof AcceptGroupInvitationInput>;
export type RejectGroupInvitationInput = z.infer<typeof RejectGroupInvitationInput>;
