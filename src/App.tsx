import styled from "styled-components";
import Circle from "./Circle";

function App() {
  return (
    <div>
      <Circle text='Circle Text' bgColor='teal' borderColor='tomato' />
      <Circle bgColor='tomato' borderColor='teal' />
    </div>
  );
}

export default App;
