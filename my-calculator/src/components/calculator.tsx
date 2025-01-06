import React from 'react';
import styled from 'styled-components';
import Buttons, { ButtonType } from './Buttons';

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
        <Buttons label="AC" position = {[0, 0]}  width={2}/>
        <Buttons label="oops" position ={[2, 0]}  width= {2}/>
        <Buttons label="-" position = {[3, 1]} />
        <Buttons label="+" position = {[3, 2]} />
        <Buttons label="=" position = {[3, 3]} height={2} />
        <Buttons type={ButtonType,Number}  label="9" position = {[2, 1]}/>
        <Buttons type={ButtonType,Number}  label="8" position = {[1, 1]}/>
        <Buttons type={ButtonType,Number} label="7" position = {[0, 1]} />
        <Buttons type={ButtonType,Number} label="6" position = {[2, 2]} />
        <Buttons type={ButtonType,Number} label="5" position = {[1, 2]}/>
        <Buttons type={ButtonType,Number} label="4" position = {[0, 2]}/>
        <Buttons type={ButtonType,Number} label="3" position = {[2, 3]}/>
        <Buttons type={ButtonType,Number} label="2" position = {[1, 3]}/>
        <Buttons type={ButtonType,Number} label="1" position = {[0, 3]} />
        <Buttons type={ButtonType,Number} label="0" position = {[0, 4]} width ={3} />
        
      </Grid>
    </Container>
  );
};

export default Calculator;
