import styled from 'styled-components';
import Calculator from './components/calculator';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

function App() {
  return (
    <Container>
      <Calculator />
    </Container>
  );
}

export default App;
