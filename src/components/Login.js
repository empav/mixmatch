import React from 'react';
import useForm from '../hooks/useForm';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, GlobalStyle } from '../style';
import { useHistory } from 'react-router-dom';
import useDarkMode from '../hooks/useDarkMode';

const Container = styled.div`
  background: ${({ theme }) => theme.palette.background};
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 20%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${({ theme }) => theme.palette.yellow};

  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows[0]};

  > input:not(:last-child) {
    margin: 0.5em 0;
    padding: 0.3em 0.7em;
    font-size: ${({ theme }) => theme.typography.fontSizeSmall};
  }

  [type='submit'] {
    padding: 0.5em 1em;
    background-color: ${({ theme }) => theme.palette.purple};
    color: ${({ theme }) => theme.palette.main};
    font-size: ${({ theme }) => theme.typography.fontSizeSmall};
  }

  h2 {
    color: ${({ theme }) => theme.palette.purple};
    margin: 0 0 1em 0;
  }

  label {
    color: ${({ theme }) => theme.palette.purple};
  }

  button {
    cursor: pointer;
    font-family: inherit;
    font-size: ${({ theme }) => theme.typography.fontSize};
    &:hover,
    &:focus {
      opacity: 0.9;
    }
  }
`;

const Login = () => {
  const isDark = useDarkMode();
  const [input, errors, handleSubmit, handleChange, formRef] = useForm();
  const history = useHistory();

  const onSubmit = () => history.push('/');

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)} noValidate ref={formRef}>
          <h2>Mix & Match</h2>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            required
            onChange={handleChange}
            value={input('email')}
            autoFocus
          />
          {errors['email'] && <small>{errors['email']}</small>}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            onChange={handleChange}
            value={input('password')}
          />
          {errors['password'] && <small>{errors['password']}</small>}
          <button type="submit">Login</button>
        </Form>
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default Login;
