import { useState, useEffect } from 'react'
import './style.css';
import { AdminUserListResponseDto } from 'src/interface/response';
import { adminUserListMock } from 'src/mocks';

export default function AdminMember() {

    const [userList, setUserList] = useState<AdminUserListResponseDto[]>([]);

    //          interface          //
    interface RowItemProps {
        user: AdminUserListResponseDto
    }

    //          component          //
    const RowItem = ({ user }: RowItemProps) => {

        const { name, email, birth, phoneNumber, registrationDatetime } = user;

        return (
            <div className='admin-member-list-row'>
                <div className='admin-member-list-row-item'>{ name }</div>
                <div className='admin-member-list-row-item'>{ email }</div>
                <div className='admin-member-list-row-item'>{ birth }</div>
                <div className='admin-member-list-row-item'>{ phoneNumber }</div>
                <div className='admin-member-list-row-item'>{ registrationDatetime }</div>
            </div>
        )
    }

    useEffect(() => {
        setUserList(adminUserListMock);
    }, []);

  return (
    <div id='admin-member-wrapper'>
        <div className='admin-member-title'>회원관리</div>
        <div className='admin-member-list-container'>
            <div className='admin-member-list-header'>
                <div className='admin-member-list-header-item'>이름</div>
                <div className='admin-member-list-header-item'>이메일</div>
                <div className='admin-member-list-header-item'>생년월일</div>
                <div className='admin-member-list-header-item'>휴대전화</div>
                <div className='admin-member-list-header-item'>가입날짜</div>
            </div>
            <div className='admin-member-list-row-container'>
                {userList.map((user) => (<RowItem user={user} />))}
            </div>
        </div>
    </div>
  )
}
