import { Box, Link, Typography } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminMain from './Main'
import './style.css';
import AdminMember from './Member';

export default function AdminLayout() {
  return (
    <Box sx={{ display: 'flex', marginTop: '25px' }}>
        <div className='admin-navigation'>
            <div className='admin-navigation-title'>관리자 모드</div>
            <div className='admin-navigation'>
                <div className='admin-navigation-item-active'>HOME</div>
                <div className='admin-navigation-item'>회원 관리</div>
                <div className='admin-navigation-item'>결제 내역</div>
                <div className='admin-navigation-item'>상품 관리</div>
                <div className='admin-navigation-item'>여행지 관리</div>
                <div className='admin-navigation-item'>공지사항 게시판 관리</div>
            </div>
        </div>
        <Box sx={{ flex: '4' }}>
          {/* <AdminMain /> */}
          <AdminMember />
        </Box>
    </Box>
  )
}
