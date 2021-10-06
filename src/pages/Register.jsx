import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
width: 100vw;
height: 100vh;
background:
linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.3)),
url(https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/wallpapers/rtx-3090/3090-wallpaper-3440x1440-r1.png);
background-position: center;
background-size:contain;
display: flex;
align-items: center;
justify-content: center;
`;

const Wrapper = styled.div`
  padding:20px;
  width: 40%;
  background-color: white;
`;
const Title = styled.h1``;
const Form = styled.form``;
const Input = styled.input``;
const Agreement = styled.div``;
const Button = styled.button``;

const Register = () => {
  return <Container>
    <Wrapper>
      <Title>Create An Account</Title>
      <Form>
        <Input placeholder="name"/>
        <Input placeholder="last name"/>
        <Input placeholder="username"/>
        <Input placeholder="email"/>
        <Input placeholder="password"/>
        <Input placeholder="confirm password"/>
        <Agreement>
          By Crating an account, I consent ot the processing of my personal data in accordance with <b>PRIVACY POLICY</b>
        </Agreement>
        <Button>Create Account</Button>
      </Form>
    </Wrapper>
  </Container>;
};

export default Register;
