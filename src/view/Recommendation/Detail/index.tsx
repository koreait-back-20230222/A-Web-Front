import { Box, Card, Divider, Typography } from '@mui/material'

export default function RecommendationDetail() {
  return (
    <Box margin='5vh 10vw'>
        <Card sx={{ padding: '25px' }}>
            <Box display='flex' padding='10px'>
                <Typography variant='h5' flex='1'>제목</Typography>
                <Typography variant='h5' flex='5'>경복궁으로 오세요~</Typography>
            </Box>
            <Divider />
            <Box display='flex' padding='10px'>
                <Box flex='1'>
                    <Box height='40vh' component='img' src='https://www.chf.or.kr/jnrepo/namo/img/images/000045/20230405103334542_MPZHA77B.jpg'></Box>
                </Box>
                <Divider sx={{ m: '5px' }} orientation="vertical" flexItem />
                <Box flex='2' display='flex' justifyContent='center' alignItems='center'>
                    <Typography>동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세</Typography>
                </Box>
            </Box>
            <Divider />
            <Box display='flex' padding='10px'>
                <Typography variant='h5' flex='1'>주소</Typography>
                <Typography variant='h5' flex='5'>서울특별시 종로구 사직로 161 (세종로, 경복궁)</Typography>
            </Box>
            <Divider />
            <Box display='flex' padding='10px'>
                <Typography variant='h5' flex='1'>이용 시간</Typography>
                <Typography variant='h5' flex='5'>09:00~17:00</Typography>
            </Box>
            <Divider />
            <Box display='flex' padding='10px'>
                <Typography variant='h5' flex='1'>문의 및 안내</Typography>
                <Typography variant='h5' flex='5'>http://www.royalpalace.go.kr</Typography>
            </Box>
        </Card>
    </Box>
  )
}
