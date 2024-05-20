import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import {
  API_BASE_URL as BASE,
  USER,
} from '../../config/host-config';

const Login = () => {
  const REQUEST_URL = BASE + USER + '/signin';
  //서버에 비동기 로그인 요청 AJZX요청
  const fetchLogin = () => {
    // 이메일과 비밀번호를 직접 지목해서 얻어오세요. (getElementById로 직접 지목해서 가져오세요.)
    // 요청 방식: POST / email, password라는 이름으로 JSON을 전송하세요.
    // 응답 데이터를 console.log로 확인하세요.
    // 응답 데이터를 console.log로 확인하세요.
    // 응답 데이터를 console.log로 확인하세요.
    const $email = document.getElementById('email');
    const $password = document.getElementById('password');
    fetch(`${BASE}${USER}`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify($email, $password),
    });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    //입력값에 관련되 처리를 하고 싶으면 여기서

    fetchLogin();
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{ margin: '200px auto' }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
        </Grid>
      </Grid>

      <form noValidate onSubmit={loginHandler}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="email address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="on your password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              로그인
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Login;
