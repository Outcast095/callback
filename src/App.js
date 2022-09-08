import './App.css';
import { useState } from "react";
import useButtonPlusHandler from "./helpers/useButtonPlusHandler";
import useButtonMinusHandler from "./helpers/useButtonMinusHandler";
import useLogPlusHandler from "./helpers/useLogPLusHandler";
import useLogMinusHandler from "./helpers/useLogMinusHandler";




function App() {
    let number1 = 5;
    let number2 = 10;

  const { logPlusHandler } = useLogPlusHandler(number1, number2)
  const { logMinusHandler } = useLogMinusHandler(number1, number2)


  const { buttonPlusHandler } = useButtonPlusHandler()
  const { buttonMinusHandler } = useButtonMinusHandler()



  return (
    <div className="App">

      <button onClick={() => buttonPlusHandler(logPlusHandler)}>+</button>
      <button onClick={() => buttonMinusHandler(logMinusHandler)}>-</button>
    </div>
  );
}

export default App;
