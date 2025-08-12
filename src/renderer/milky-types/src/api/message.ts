import { z } from 'zod';
import { ZInt32, ZInt64, ZString } from '../scalar';
import { MessageIdentifier } from '../common';
import { OutgoingSegment, IncomingMessage, IncomingForwardedMessage } from '../message';

// 发送消息 API 基础
export const SendMessageApiBase = z.object({
  message: z.array(z.lazy(() => OutgoingSegment)).describe('消息内容'),
});

// 发送消息 API 通用输出
export const SendMessageApiCommonOutput = z.object({
  message_seq: ZInt64.describe('消息序列号'),
  time: ZInt64.describe('消息发送时间'),
});

// 发送私聊消息输入
export const SendPrivateMessageInput = z.object({
  user_id: ZInt64.describe('好友 QQ 号'),
}).extend(SendMessageApiBase.shape);

// 发送私聊消息输出
export const SendPrivateMessageOutput = SendMessageApiCommonOutput;

// 发送群消息输入
export const SendGroupMessageInput = z.object({
  group_id: ZInt64.describe('群号'),
}).extend(SendMessageApiBase.shape);

// 发送群消息输出
export const SendGroupMessageOutput = SendMessageApiCommonOutput;

// 获取消息输入
export const GetMessageInput = MessageIdentifier;

// 获取消息输出
export const GetMessageOutput = z.object({
  message: z.lazy(() => IncomingMessage).describe('消息内容'),
});

// 获取历史消息输入
export const GetHistoryMessagesInput = z.object({
  message_scene: z.enum(['friend', 'group', 'temp']).describe('消息场景'),
  peer_id: ZInt64.describe('好友 QQ 号或群号'),
  start_message_seq: ZInt64.optional().describe('起始消息序列号，由此开始从新到旧查询，不提供则从最新消息开始'),
  limit: ZInt32.default(20).describe('获取的最大消息数量'),
});

// 获取历史消息输出
export const GetHistoryMessagesOutput = z.object({
  messages: z.array(z.lazy(() => IncomingMessage)).describe('获取到的消息，部分消息可能不存在，如撤回的消息'),
});

// 获取临时资源链接输入
export const GetResourceTempUrlInput = z.object({
  resource_id: ZString.describe('资源 ID'),
});

// 获取临时资源链接输出
export const GetResourceTempUrlOutput = z.object({
  url: ZString.describe('临时资源链接'),
});

// 获取合并转发消息内容输入
export const GetForwardedMessagesInput = z.object({
  forward_id: ZString.describe('转发消息 ID'),
});

// 获取合并转发消息内容输出
export const GetForwardedMessagesOutput = z.object({
  messages: z.array(z.lazy(() => IncomingForwardedMessage)).describe('转发消息内容'),
});

// 撤回私聊消息输入
export const RecallPrivateMessageInput = z.object({
  user_id: ZInt64.describe('好友 QQ 号'),
  message_seq: ZInt64.describe('消息序列号'),
});

// 撤回群消息输入
export const RecallGroupMessageInput = z.object({
  group_id: ZInt64.describe('群号'),
  message_seq: ZInt64.describe('消息序列号'),
});

// 导出类型
export type SendMessageApiBase = z.infer<typeof SendMessageApiBase>;
export type SendMessageApiCommonOutput = z.infer<typeof SendMessageApiCommonOutput>;
export type SendPrivateMessageInput = z.infer<typeof SendPrivateMessageInput>;
export type SendPrivateMessageOutput = z.infer<typeof SendPrivateMessageOutput>;
export type SendGroupMessageInput = z.infer<typeof SendGroupMessageInput>;
export type SendGroupMessageOutput = z.infer<typeof SendGroupMessageOutput>;
export type GetMessageInput = z.infer<typeof GetMessageInput>;
export type GetMessageOutput = z.infer<typeof GetMessageOutput>;
export type GetHistoryMessagesInput = z.infer<typeof GetHistoryMessagesInput>;
export type GetHistoryMessagesOutput = z.infer<typeof GetHistoryMessagesOutput>;
export type GetResourceTempUrlInput = z.infer<typeof GetResourceTempUrlInput>;
export type GetResourceTempUrlOutput = z.infer<typeof GetResourceTempUrlOutput>;
export type GetForwardedMessagesInput = z.infer<typeof GetForwardedMessagesInput>;
export type GetForwardedMessagesOutput = z.infer<typeof GetForwardedMessagesOutput>;
export type RecallPrivateMessageInput = z.infer<typeof RecallPrivateMessageInput>;
export type RecallGroupMessageInput = z.infer<typeof RecallGroupMessageInput>;
