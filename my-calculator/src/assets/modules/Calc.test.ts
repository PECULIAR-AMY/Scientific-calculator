import Calc, { CalcInput, InputType, OperationType } from './Calc';

test('derive state', () => {
  const inputs: CalcInput[] = [
    { type: InputType.Numerical, value: 1 },
    { type: InputType.Numerical, value: 2 },
    { type: InputType.Operation, operation: OperationType.Add },
    { type: InputType.Numerical, value: 3 },
    { type: InputType.Operation, operation: OperationType.Equals },
  ];

  const state = Calc.getState(inputs); // Correct syntax
  expect(state.displayValue).toEqual(6); // Adjust the expected value based on `getState` logic
});
