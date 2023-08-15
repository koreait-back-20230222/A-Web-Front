import { Box, Card, Divider, FormControl, IconButton, Input, InputLabel, Typography } from '@mui/material'
import { Search } from '@mui/icons-material';

export default function RecommendationWrite() {
  return (
    <Box margin='5vh 10vw'>
        <Card sx={{ padding: '25px' }}>
            <Box display='flex' padding='10px' alignItems='center'>
                <Typography variant='h5' flex='1'>제목</Typography>
                <Box flex='5'>
                    <Input fullWidth disableUnderline sx={{ fontSize: '1.5rem' }} />
                </Box>
            </Box>
            <Divider />
            <Box display='flex' padding='10px'>
                <Box flex='1'>
                    <Box height='40vh' component='img' src='https://www.chf.or.kr/jnrepo/namo/img/images/000045/20230405103334542_MPZHA77B.jpg'></Box>
                </Box>
                <Divider sx={{ m: '5px' }} orientation="vertical" flexItem />
                <Box flex='2' display='flex' justifyContent='center' alignItems='center'>
                    <Input fullWidth disableUnderline multiline minRows='15' placeholder='내용을 입력하세요.' />
                </Box>
            </Box>
            <Divider />
            <Box display='flex' padding='10px' alignItems='center'>
                <Typography variant='h5' flex='1'>주소</Typography>
                <Box flex='5'>
                    <Input fullWidth disableUnderline sx={{ fontSize: '1.5rem' }} endAdornment={<IconButton><Search /></IconButton>}/>
                </Box>
            </Box>
            <Divider />
            <Box display='flex' padding='10px' alignItems='center'>
                <Typography variant='h5' flex='1'>이용 시간</Typography>
                <Box flex='5'>
                    <Input fullWidth disableUnderline sx={{ fontSize: '1.5rem' }} />
                </Box>
            </Box>
            <Divider />
            <Box display='flex' padding='10px' alignItems='center'>
                <Typography variant='h5' flex='1'>문의 및 안내</Typography>
                <Box flex='5'>
                    <Input fullWidth disableUnderline sx={{ fontSize: '1.5rem' }} />
                </Box>
            </Box>
        </Card>
    </Box>
  )
}
