import { useState, useEffect } from 'react'
import { AdminNoticeListResponseDto } from 'src/interface/response';
import { adminNoticeListMock } from 'src/mocks';
import './style.css';

export default function AdminNotice() {

    const [noticeList, setNoticeList] = useState<AdminNoticeListResponseDto[]>([]);

    //          interface          //
    interface RowItemProps {
        notice: AdminNoticeListResponseDto
    }

    //          component          //
    const RowItem = ({ notice }: RowItemProps) => {

        const { noticeBoardNumber, noticeBoardTitle, noticeBoardWriteDate } = notice;

        return (
            <div className='admin-member-list-row'>
                <div className='admin-member-list-row-item'>{ noticeBoardNumber }</div>
                <div className='admin-member-list-row-item'>{ noticeBoardTitle }</div>
                <div className='admin-member-list-row-item'>{ noticeBoardWriteDate }</div>
                <div className='admin-member-list-row-item'>
                    <div className='update-icon-button'></div>
                </div>
                <div className='admin-member-list-row-item'>
                    <div className='delete-icon-button'></div>
                </div>
            </div>
        )
    }

    useEffect(() => {
        setNoticeList(adminNoticeListMock);
    }, []);

  return (
    <div id='admin-notice-wrapper'>
        <div className='admin-notice-title-container'>
            <div className='admin-notice-title'>공지사항</div>
            <div className='primary-button'>글쓰기</div>
        </div>
        <div className='admin-notice-list-container'>
            <div className='admin-notice-list-header'>
                <div className='admin-notice-list-header-item'>번호</div>
                <div className='admin-notice-list-header-item'>제목</div>
                <div className='admin-notice-list-header-item'>날짜</div>
                <div className='admin-notice-list-header-item'>수정</div>
                <div className='admin-notice-list-header-item'>삭제</div>
            </div>
            <div className='admin-notice-list-row-container'>
               {noticeList.map((notice) => (<RowItem notice={notice} />))}
            </div>
        </div>
    </div>
  )
}
