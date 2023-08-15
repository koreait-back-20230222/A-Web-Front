import { AdminNoticeListResponseDto, AdminUserListResponseDto } from "src/interface/response";

export const adminUserListMock: AdminUserListResponseDto[] = [
    {
        "name": "홍길동",
        "email": "hong1234@naver.com",
        "birth": "2022-01-25",
        "phoneNumber": "010-1111-2222",
        "registrationDatetime": "2023-04-27 11:22",
    },
    {
        "name": "홍길동",
        "email": "hong1234@naver.com",
        "birth": "2022-01-25",
        "phoneNumber": "010-1111-2222",
        "registrationDatetime": "2023-04-27 11:22",
    },
    {
        "name": "홍길동",
        "email": "hong1234@naver.com",
        "birth": "2022-01-25",
        "phoneNumber": "010-1111-2222",
        "registrationDatetime": "2023-04-27 11:22",
    },
];

export const adminNoticeListMock: AdminNoticeListResponseDto[] = [
    {
        "noticeBoardNumber": 1,
        "noticeBoardTitle": "공지사항 제목입니다.",
        "noticeBoardWriteDate": "2023-04-28"	
    },
    {
        "noticeBoardNumber": 1,
        "noticeBoardTitle": "공지사항 제목입니다.",
        "noticeBoardWriteDate": "2023-04-28"	
    },
    {
        "noticeBoardNumber": 1,
        "noticeBoardTitle": "공지사항 제목입니다.",
        "noticeBoardWriteDate": "2023-04-28"	
    },
];