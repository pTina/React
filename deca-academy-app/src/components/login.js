
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { db } from './firebase';

export default function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            userCode: data.get('userCode'),
        });

        // console.log(db);

    };

    return (
        <Box
            component="form"
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            onSubmit={handleSubmit}
        >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                로그인
            </Typography>

            <TextField
                label="회원 코드"
                required
                autoFocus
                fullWidth
                name="userCode"
                sx={{ mt: 2 }}
            />

            <Button
                type="submit"
                variant="contained"
                sx={{ mt: 2 }}
                fullWidth
            >로그인</Button>
        </Box>

    );
}