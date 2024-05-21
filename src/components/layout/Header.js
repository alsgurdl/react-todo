import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../scss/Header.scss';
import AuthContext from '../../utils/AuthContext';

const Header = () => {
  //authconte
  const redirection = useNavigate();
  const { isLoggedIn, userName, onLogout } =
    useContext(AuthContext);

  const logoutHandler = () => {
    //authcontext의 onlogin 함수를 호춣여 로그인 상태를 업데이트
    onLogout();
    redirection('/login');
  };

  return (
    <AppBar
      position="fixed"
      style={{
        background: '#38d9a9',
        width: '100%',
      }}
    >
      <Toolbar>
        <Grid justify="space-between" container>
          <Grid item flex={9}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography variant="h4">
                {isLoggedIn ? userName + '님' : '오늘'}의
                할일
              </Typography>
            </div>
          </Grid>

          <Grid item>
            <div className="btn-group">
              {isLoggedIn ? (
                <button
                  className="logout-btn"
                  onClick={logoutHandler}
                >
                  로그아웃
                </button>
              ) : (
                <>
                  <Link to="/login">로그인</Link>
                  <Link to="/join">회원가입</Link>
                </>
              )}
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
