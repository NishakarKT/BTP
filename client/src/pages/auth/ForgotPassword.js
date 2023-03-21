import React from 'react';
import { useNavigate } from "react-router-dom";
// constants
import { LOGO_PNG } from "../../constants/images";
import { FORGOT_PASSWORD_MP4 } from "../../constants/videos";
import { COMPANY } from "../../constants/vars";
import { HOME_ROUTE, AUTH_SIGN_IN_ROUTE, AUTH_SIGN_UP_ROUTE } from '../../constants/routes';
// mui
import { Stack, Button, Typography, Box, Link, Checkbox, FormControlLabel, TextField, InputAdornment } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from '@mui/icons-material/Key';
import PasswordIcon from '@mui/icons-material/Password';

export const ForgotPassword = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <Stack direction="row">
            <Stack sx={{ position: "relative", height: "100vh", display: { xs: "none", sm: "flex" } }} justifyContent="flex-end" flex={2}>
                <video style={{ position: "absolute", zIndex: "-1", width: "100%", height: "100%", objectFit: "cover" }} src={FORGOT_PASSWORD_MP4} muted autoPlay loop></video>
                <Stack justifyContent="flex-end" sx={{ height: "100%", backgroundColor: "rgba(255, 255, 0, 0.4)" }}>
                    <Stack p={2} spacing={2} sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                        <Typography color="white" variant="h4">Forgot Password?</Typography>
                        <Typography color="white" variant="body2">Please verify your email address to reset your account password.<br />If you know your password, you can sign in by clicking the "Sign In" button.</Typography>
                        <Stack direction="row" spacing={1}>
                            <Button onClick={() => navigate(HOME_ROUTE)} variant="contained" color="success" startIcon={<HomeIcon />}>Home</Button>
                            <Button onClick={() => navigate(AUTH_SIGN_IN_ROUTE)} variant="contained" color="primary" startIcon={<LoginIcon />}>Sign In</Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Stack p={2} justifyContent="center" alignItems="center" sx={{ minHeight: "100vh", width: "100%" }} flex={1}>
                <Stack spacing={1} component="form" onSubmit={handleSubmit} sx={{ width: "100%", }}>
                    <Stack spacing={1} mb={1} direction="row" alignItems="center">
                        <Box><img style={{ width: "40px", objectFit: "contain" }} src={LOGO_PNG} alt="logo" /></Box>
                        <Stack>
                            <Typography variant="h5">Reset Password for <Typography variant="span" color="primary">{COMPANY}</Typography></Typography>
                            <Typography variant="body2">Creativity takes courage!</Typography>
                        </Stack>
                    </Stack>
                    <TextField InputProps={{ startAdornment: (<InputAdornment position="start"><AccountCircleIcon /></InputAdornment>) }} helperText="Type the email address of your existing account." placeholder="nishakarkumar0@outlook.com" variant="standard" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
                    <TextField InputProps={{ startAdornment: (<InputAdornment position="start"><KeyIcon /></InputAdornment>) }} helperText="Create a new password." placeholder="******" variant="standard" required fullWidth name="password" label="New Password" type="password" id="password" />
                    <TextField InputProps={{ startAdornment: (<InputAdornment position="start"><PasswordIcon /></InputAdornment>) }} helperText="Type the OTP sent to your email." placeholder="******" variant="standard" required fullWidth name="otp" label="OTP (One Time Password)" type="password" id="otp" />
                    <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                    <Button type="submit" fullWidth variant="contained" sx={{ my: 2 }} startIcon={<PasswordIcon />}>Verify OTP</Button>
                    <Stack spacing={2} direction="row" justifyContent="space-between">
                        <Link onClick={() => navigate(AUTH_SIGN_IN_ROUTE)} sx={{ cursor: "pointer" }} variant="body2">Have an account? Sign In</Link>
                        <Link onClick={() => navigate(AUTH_SIGN_UP_ROUTE)} sx={{ cursor: "pointer" }} variant="body2">Don't have an account? Sign Up</Link>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default ForgotPassword;