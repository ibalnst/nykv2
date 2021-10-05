import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  background-color: #02475e;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  letter-spacing: 2px;
`;

const Info = styled.div`
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Buy Now</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
