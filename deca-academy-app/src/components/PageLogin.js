
import * as React from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import searchDatabase from './Firebase';
import "./PageLogin.css";

const PageLogin = () => {
    const [userType, setUserType] = React.useState('');
    const [userLogin, setUserLogin] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        setUserLogin(searchDatabase(data));
    };

    const handleChange = (e)=>{
        setUserType(e.target.value);
    }

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

            <FormControl fullWidth>
                <InputLabel id="select-user-type-label">유형 선택</InputLabel>
                <Select
                    autoFocus
                    required
                    labelId="select-user-type-label"
                    id="select-user-type"
                    value={userType}
                    label="userType"
                    name="userType"
                    onChange={handleChange}
                >
                    <MenuItem value={'student'}>학생</MenuItem>
                    <MenuItem value={'teacher'}>선생님</MenuItem>
                </Select>
            </FormControl>

            <TextField
                label="회원 코드"
                required
                fullWidth
                name="userId"
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

export default PageLogin;