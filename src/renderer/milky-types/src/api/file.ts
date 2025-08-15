import { z } from 'zod';
import { ZInt64, ZString } from '../scalar';
import { GroupFileEntity, GroupFolderEntity } from '../common';

// 文件上传 API 基础
export const FileUploadApiBase = z.object({
  file_uri: ZString.describe('文件 URI，支持 `file://` `http(s)://` `base64://` 三种格式'),
  file_name: ZString.describe('文件名称'),
});

// 文件下载 API 基础
export const FileDownloadApiBase = z.object({
  file_id: ZString.describe('文件 ID'),
});

// 上传私聊文件输入
export const UploadPrivateFileInput = z.object({
  user_id: ZInt64.describe('好友 QQ 号'),
}).extend(FileUploadApiBase.shape);

// 上传私聊文件输出
export const UploadPrivateFileOutput = z.object({
  file_id: ZString.describe('文件 ID'),
});

// 上传群文件输入
export const UploadGroupFileInput = z.object({
  group_id: ZInt64.describe('群号'),
  parent_folder_id: ZString.optional().describe('目标文件夹 ID，默认为根目录'),
}).extend(FileUploadApiBase.shape);

// 上传群文件输出
export const UploadGroupFileOutput = z.object({
  file_id: ZString.describe('文件 ID'),
});

// 获取私聊文件下载链接输入
export const GetPrivateFileDownloadUrlInput = z.object({
  user_id: ZInt64.describe('好友 QQ 号'),
}).extend(FileDownloadApiBase.shape);

// 获取私聊文件下载链接输出
export const GetPrivateFileDownloadUrlOutput = z.object({
  download_url: ZString.describe('文件下载链接'),
});

// 获取群文件下载链接输入
export const GetGroupFileDownloadUrlInput = z.object({
  group_id: ZInt64.describe('群号'),
}).extend(FileDownloadApiBase.shape);

// 获取群文件下载链接输出
export const GetGroupFileDownloadUrlOutput = z.object({
  download_url: ZString.describe('文件下载链接'),
});

// 获取群文件列表输入
export const GetGroupFilesInput = z.object({
  group_id: ZInt64.describe('群号'),
  parent_folder_id: ZString.optional().describe('父文件夹 ID，默认为根目录'),
});

// 获取群文件列表输出
export const GetGroupFilesOutput = z.object({
  files: z.array(z.lazy(() => GroupFileEntity)).describe('文件列表'),
  folders: z.array(z.lazy(() => GroupFolderEntity)).describe('文件夹列表'),
});

// 移动群文件输入
export const MoveGroupFileInput = z.object({
  group_id: ZInt64.describe('群号'),
  file_id: ZString.describe('文件 ID'),
  target_folder_id: ZString.optional().describe('目标文件夹 ID，默认为根目录'),
});

// 重命名群文件输入
export const RenameGroupFileInput = z.object({
  group_id: ZInt64.describe('群号'),
  file_id: ZString.describe('文件 ID'),
  new_file_name: ZString.describe('新文件名称'),
});

// 删除群文件输入
export const DeleteGroupFileInput = z.object({
  group_id: ZInt64.describe('群号'),
  file_id: ZString.describe('文件 ID'),
});

// 创建群文件夹输入
export const CreateGroupFolderInput = z.object({
  group_id: ZInt64.describe('群号'),
  folder_name: ZString.describe('文件夹名称'),
});

// 创建群文件夹输出
export const CreateGroupFolderOutput = z.object({
  folder_id: ZString.describe('文件夹 ID'),
});

// 重命名群文件夹输入
export const RenameGroupFolderInput = z.object({
  group_id: ZInt64.describe('群号'),
  folder_id: ZString.describe('文件夹 ID'),
  new_folder_name: ZString.describe('新文件夹名'),
});

// 删除群文件夹输入
export const DeleteGroupFolderInput = z.object({
  group_id: ZInt64.describe('群号'),
  folder_id: ZString.describe('文件夹 ID'),
});

// 导出类型
export type FileUploadApiBase = z.infer<typeof FileUploadApiBase>;
export type FileDownloadApiBase = z.infer<typeof FileDownloadApiBase>;
export type UploadPrivateFileInput = z.infer<typeof UploadPrivateFileInput>;
export type UploadPrivateFileOutput = z.infer<typeof UploadPrivateFileOutput>;
export type UploadGroupFileInput = z.infer<typeof UploadGroupFileInput>;
export type UploadGroupFileOutput = z.infer<typeof UploadGroupFileOutput>;
export type GetPrivateFileDownloadUrlInput = z.infer<typeof GetPrivateFileDownloadUrlInput>;
export type GetPrivateFileDownloadUrlOutput = z.infer<typeof GetPrivateFileDownloadUrlOutput>;
export type GetGroupFileDownloadUrlInput = z.infer<typeof GetGroupFileDownloadUrlInput>;
export type GetGroupFileDownloadUrlOutput = z.infer<typeof GetGroupFileDownloadUrlOutput>;
export type GetGroupFilesInput = z.infer<typeof GetGroupFilesInput>;
export type GetGroupFilesOutput = z.infer<typeof GetGroupFilesOutput>;
export type MoveGroupFileInput = z.infer<typeof MoveGroupFileInput>;
export type RenameGroupFileInput = z.infer<typeof RenameGroupFileInput>;
export type DeleteGroupFileInput = z.infer<typeof DeleteGroupFileInput>;
export type CreateGroupFolderInput = z.infer<typeof CreateGroupFolderInput>;
export type CreateGroupFolderOutput = z.infer<typeof CreateGroupFolderOutput>;
export type RenameGroupFolderInput = z.infer<typeof RenameGroupFolderInput>;
export type DeleteGroupFolderInput = z.infer<typeof DeleteGroupFolderInput>;
