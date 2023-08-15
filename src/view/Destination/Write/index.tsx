import { Search } from '@mui/icons-material'
import { Box, Button, Card, Divider, IconButton, Input, Typography } from '@mui/material'
import React from 'react'

export default function DestinationWrite() {
  return (
    <Box margin='5vh 10vw'>
        <Card sx={{ padding: '25px' }}>
            <Box display='flex' padding='10px' alignItems='center'>
                <Typography variant='h5' flex='1'>여행지 이름</Typography>
                <Box flex='5'>
                    <Input fullWidth disableUnderline sx={{ fontSize: '1.5rem' }} />
                </Box>
            </Box>
            <Divider />
            <Box padding='10px'>
                <Box height='40vh' component='img' src='https://www.chf.or.kr/jnrepo/namo/img/images/000045/20230405103334542_MPZHA77B.jpg'></Box>
            </Box>
            <Divider />
            <Box display='flex' padding='10px' alignItems='center'>
                <Typography variant='h5' flex='1'>주소</Typography>
                <Box flex='5'>
                    <Input fullWidth disableUnderline sx={{ fontSize: '1.5rem' }} endAdornment={<IconButton><Search /></IconButton>}/>
                </Box>
            </Box>
        </Card>
    </Box>
  )
}
