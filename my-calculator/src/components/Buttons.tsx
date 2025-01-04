import React from 'react';
import styled from 'styled-components';

type Props = {
  label: string;
  position?:[x:number, y:number],
  width?:number
};

const StyledButton = styled.button`
  border-radius: 8px;
  color: white;
  background-color: orange;
  border: none;
  flex: 1;
  fontsize:24px
`;

const Buttons: React.FC<Props> = ({ label, position, width }) => {
  return <StyledButton>{label}</StyledButton>;
};

export default Buttons;
