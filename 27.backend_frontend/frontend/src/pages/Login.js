import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import api from '../api';

const Login = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const { data } = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', data.token);
      nav('/');
    } catch (error) {
      setError(error?.response?.data?.message || 'Login Failed');
    }
  };
  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" mb={2}>
          Login
        </Typography>
        <Box component="form" onSubmit={submit}>
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )}
          <Button type="submit" variant="contained" sx={{ mt: 2 }} fullWidth>
            Sign In
          </Button>
        </Box>
        <Typography variant="caption" display="block" sx={{ mt: 2 }}>
          Tip: First POST /auth/register with your email+password (via Postman)
          to seed a user.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Login;
