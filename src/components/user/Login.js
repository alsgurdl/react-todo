import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import React, { useContext } from 'react';
import {
  API_BASE_URL as BASE,
  USER,
} from '../../config/host-config';
import { result } from 'lodash';
import AuthContext from '../../utils/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const REQUEST_URL = BASE + USER + '/signin';
  const { onLogin } = useContext(AuthContext);

  const redirection = useNavigate();

  //서버에 비동기 로그인 요청 AJZX요청
  //함수 아에 async를 붙이면 해당 함수는 프로미스 객체를 바로 리턴
  const fetchLogin = async () => {
    // 이메일과 비밀번호를 직접 지목해서 얻어오세요. (getElementById로 직접 지목해서 가져오세요.)
    // 요청 방식: POST / email, password라는 이름으로 JSON을 전송하세요.
    // 응답 데이터를 console.log로 확인하세요.

    const $email = document.getElementById('email');
    const $password = document.getElementById('password');
    //await는 async로 선언된 함수에서만 사용이 가능
    //awit는 프로미스객체가 처리될 때까지 기다림
    //
    const res = await fetch(REQUEST_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email: $email.value,
        password: $password.value,
      }),
    });

    if (res.status === 400) {
      const text = await res.text();
      alert(text);
      return;
    }
    const { token, userName, email, role } =
      await res.json(); //서버에서 전달된 json을 변수에 저장
    //contextapi를 사용하여 로그인 상탸를 업데이트
    onLogin(token, userName, role);
    redirection('/');
    //홈으로 리다이렉트

    // fetch(`${BASE}${USER}`, {
    //   method: 'POST',
    //   headers: { 'content-type': 'application/json' },
    //   body: JSON.stringify({
    //     email: $email,
    //     password: $password,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
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
