import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
width: 100vw;
height: 100vh;
background:
linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.3)),
url(https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/wallpapers/rtx-3090/3090-wallpaper-3440x1440-r1.png);
background-position: center;
background-size:cover;
display: flex;
align-items: center;
justify-content: center;
`;

const Wrapper = styled.div`
  padding:20px;
  width: 40%;
  background-color: white;
`;
const Title = styled.h1`
font-size:24px;
font-weight: 300;
`;
const Form = styled.form`
display: flex;
flex-direction: column;
`;
const Input = styled.input`
flex:1;
min-width:25%;
margin: 10px 0px ;
padding: 10px;
`;
// const Agreement = styled.span`
// font-size: 12px;
// margin:20px 0px
// `;
const Button = styled.button`
width: 40%;
border: none;
padding:15px 20px;
background-color: teal;
color: white;
cursor:pointer;
margin-bottom: 10px;
`;

const Link = styled.a`
margin:5px 0px;
font-size: 12px;
text-decoration:underline;
cursor: pointer;
`;

const Login = () => {
  return <Container>
  <Wrapper>
    <Title>Log In</Title>
    <Form>
      <Input placeholder="email / username"/>
      <Input placeholder="password"/>
      <Button>Sign In</Button>
      <Link>Forgot your password?</Link>
      <Link>Don't have? Create Now!</Link>
    </Form>
  </Wrapper>
</Container>;
};

export default Login;
