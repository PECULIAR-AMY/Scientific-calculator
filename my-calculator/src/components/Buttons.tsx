import React from 'react';
import styled from 'styled-components';



export enum ButtonType{
 Number,
 Operation,   
}

type Props = {
  type?: ButtonType;
  label: string;
  position?: [x: number, y: number];
  width?: number;
  height?: number;
};

const StyledButton = styled.button`
  border-radius: 8px; 
  color: white;
  background-color: orange;
  border: none;
  font-size:24px
`;

const Buttons: React.FC<Props> = ({ label, position, width, height, type = ButtonType.Operation }) => {
  const styles: React.CSSProperties = {};
  if (position) {
    styles.gridColumnStart = position[0] + 1;
    styles.gridRowStart = position[1] + 1;
  }

  if (height) {
    styles.gridRowEnd = `span ${height}`; 
  }

  if (width) {
    styles.gridColumnEnd = `span ${width}`; 
  }

  return (
    <StyledButton style={styles}>
      {label}
    </StyledButton>
  );
};

export default Buttons;
