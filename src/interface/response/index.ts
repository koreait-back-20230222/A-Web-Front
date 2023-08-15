import AdminUserListResponseDto from './admin-user-list.response.dto';
import AdminNoticeListResponseDto from './admin-notice-list.respons.dto';

export type { AdminUserListResponseDto, AdminNoticeListResponseDto };

export interface ResponseDto<Data> {
    code: string;
    message: string;
    data: Data;
}