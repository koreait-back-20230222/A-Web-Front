import { Box, Card, CardHeader, Divider, Grid, Link, Typography } from '@mui/material'
import './style.css';

export default function AdminMain() {

    //          interface          //
    interface MemberItemProps {
        name: string;
        email: string;
        telNumber: string;
        signInDate: string;
    }

    interface PaymentItemProps {
        buyer: string;
        productInformation: string;
        paymentAmount: number;
        state: string;
        paymentTime: string;
    }

    interface ProductItemProps {
        productImage: string;
        productName: string;
        payment: number;
    }

    //          component          //
    const MemberItem = ({name, email, telNumber, signInDate}: MemberItemProps) => {
        return (
            <div className='admin-main-member-item'>
                <div className='admin-main-member-item-text'>{name}</div>
                <div className='admin-main-member-item-text'>{email}</div>
                <div className='admin-main-member-item-text'>{telNumber}</div>
                <div className='admin-main-member-item-text'>{signInDate}</div>
            </div>
        )
    }

    const PaymentItem = ({buyer, productInformation, paymentAmount, state, paymentTime}: PaymentItemProps) => {
        return (
            <div className='admin-main-payment-item'>
                <div className='admin-main-payment-item-text'>{buyer}</div>
                <div className='admin-main-payment-item-text'>{productInformation}</div>
                <div className='admin-main-payment-item-text'>{paymentAmount}원</div>
                <div className='admin-main-payment-item-text'>{state}</div>
                <div className='admin-main-payment-item-text'>{paymentTime}</div>
            </div>
        )
    }

    const ProductItem = ({productImage, productName, payment}: ProductItemProps) => {
        return (
            <div className='admin-main-product-item'>
                <div className='admin-main-product-item-image' style={{ backgroundImage: `url(${productImage})` }}></div>
                <div className='admin-main-product-item-text'>{productName}</div>
                <div className='admin-main-product-item-text'>{payment}원</div>
            </div>
        )
    }

  return (
    <Box sx={{ marginTop: '50px' }}>
        <Grid container sx={{ marginTop: '10px' }}>
            <Grid item xs={6}>
                <div className='admin-main-box'>
                    <div className='admin-main-box-title'>
                        <div className='admin-main-box-title-text'>최근 가입 회원</div>
                        <div className='admin-main-box-title-more'>more +</div>
                    </div>
                    <div className='admin-main-member'>
                        <div className='admin-main-member-column'>회원 이름</div>
                        <div className='admin-main-member-column'>회원 이메일</div>
                        <div className='admin-main-member-column'>휴대전화</div>
                        <div className='admin-main-member-column'>가입일</div>
                    </div>
                    <MemberItem name='홍길동' email='gildong@email.com'  telNumber='010-1111-2222' signInDate='2023-04-22' />
                </div>
            </Grid>
            <Grid item xs={6}>
                <Box sx={{ flex: 1, margin: '10px', border: '1px solid rgba(0, 0, 0, 0.1)' }}>
                    {/* 매출량? */}
                </Box>
            </Grid>
        </Grid>
        <Grid container sx={{ marginTop: '10px' }}>
            <Grid item xs={6}>
                <div className='admin-main-box'>
                    <div className='admin-main-box-title'>
                        <div className='admin-main-box-title-text'>최근 결제 내역</div>
                        <div className='admin-main-box-title-more'>more +</div>
                    </div>
                    <div className='admin-main-member'>
                        <div className='admin-main-member-column'>구매자</div>
                        <div className='admin-main-member-column'>상품 정보</div>
                        <div className='admin-main-member-column'>결제금액</div>
                        <div className='admin-main-member-column'>상태</div>
                        <div className='admin-main-member-column'>결제 시간</div>
                    </div>
                    <PaymentItem buyer='홍길동' productInformation='해당 상품은...' paymentAmount={30000} state='결제 완료' paymentTime='2023-07-17 20:30' />
                </div>
            </Grid>
            <Grid item xs={6}>
                <div className='admin-main-box'>
                    <div className='admin-main-box-title'>
                        <div className='admin-main-box-title-text'>최근 등록 상품</div>
                        <div className='admin-main-box-title-more'>more +</div>
                    </div>
                    <div className='admin-main-member'>
                        <div className='admin-main-member-column'>상품 사진</div>
                        <div className='admin-main-member-column'>상품명</div>
                        <div className='admin-main-member-column'>가격</div>
                    </div>
                    <ProductItem productImage='' productName='제주 우도 3박 여행' payment={123000} />
                </div>
            </Grid>
        </Grid>
    </Box>
  )
}
