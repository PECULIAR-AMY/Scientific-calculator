export enum InputType {
    Numerical = 'Numerical',
    Operation = 'Operation',
  }
  
  export enum OperationType {
    Add,
    Subtract,
    Equals,
  }
  
  export type CalcInput =
    | { type: InputType.Numerical; value: number }
    | { type: InputType.Operation; operation: OperationType };
  
  export type CalcState = {
    displayValue: number;
  };
  
  export type Operator = {
    operation: OperationType;
    value: number;
  };
  
  const getOperator = (inputs: Array<CalcInput>): Array<Operator> => {
    return inputs.reduce<Array<Operator>>((operators, input) => {
      const lastOperator: Operator = operators.length
        ? operators[operators.length - 1]
        : { operation: OperationType.Add, value: 0 };
  
      switch (input.type) {
        case InputType.Numerical:
          lastOperator.value = lastOperator.value * 10 + input.value; // Accumulate numerical value
          if (!operators.length || operators[operators.length - 1] !== lastOperator) {
            operators.push(lastOperator);
          }
          break;
  
        case InputType.Operation:
          operators.push({ operation: input.operation, value: 0 }); // Start a new operator
          break;
  
        default:
          throw new Error(`Unexpected input type: ${input}`);
      }
  
      return operators;
    }, []);
  };
  
  const getState = (inputs: Array<CalcInput>): CalcState => {
    const operators = getOperator(inputs);
  
    // Simplified example: Compute the result
    let result = 0;
    let currentOperation: OperationType = OperationType.Add;
  
    for (const operator of operators) {
      switch (operator.operation) {
        case OperationType.Add:
          result += operator.value;
          break;
  
        case OperationType.Subtract:
          result -= operator.value;
          break;
  
        case OperationType.Equals:
          break;
  
        default:
          throw new Error(`Unexpected operation type: ${operator.operation}`);
      }
  
      currentOperation = operator.operation;
    }
  
    return { displayValue: result };
  };
  
  const Calc = {
    getState,
  };
  
  export default Calc;
  