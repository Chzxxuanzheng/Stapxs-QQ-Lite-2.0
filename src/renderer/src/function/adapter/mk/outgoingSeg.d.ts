import { OutgoingSegment } from '@milky/types/message'

// 具体的接收消息段类型
export type TextSeg = Extract<OutgoingSegment, { type: 'text' }>;
export type MentionSeg = Extract<OutgoingSegment, { type: 'mention' }>;
export type MentionAllSeg = Extract<OutgoingSegment, { type: 'mention_all' }>;
export type FaceSeg = Extract<OutgoingSegment, { type: 'face' }>;
export type ReplySeg = Extract<OutgoingSegment, { type: 'reply' }>;
export type ImageSeg = Extract<OutgoingSegment, { type: 'image' }>;
export type RecordSeg = Extract<OutgoingSegment, { type: 'record' }>;
export type VideoSeg = Extract<OutgoingSegment, { type: 'video' }>;
export type ForwardSeg = Extract<OutgoingSegment, { type: 'forward' }>;
export type MarketFaceSeg = Extract<OutgoingSegment, { type: 'market_face' }>;
export type LightAppSeg = Extract<OutgoingSegment, { type: 'light_app' }>;
export type XmlSeg = Extract<OutgoingSegment, { type: 'xml' }>;
