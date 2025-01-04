import React from 'react';
import styled from 'styled-components';
import Buttons from './Buttons';

const Container = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 90px);
  grid-template-rows: repeat(5, 90px);
`;

const Calculator: React.FC = () => {
  return (
    <Container>
      <Grid>
        <Buttons label="AC" position = {0, 0}  width={2}/>
        <Buttons label="oops" position ={0, 2}  width= {2}/>
        <Buttons label="1" />
        <Buttons label="2" />
        <Buttons label="3" />
        <Buttons label="4" />
        <Buttons label="5" />
        <Buttons label="6" />
        <Buttons label="7" />
        <Buttons label="8" />
        <Buttons label="9" />
      </Grid>
    </Container>
  );
};

export default Calculator;
