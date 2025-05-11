import { useState } from "react";

function App() {

    let [counter, setCounter] = useState(15);
    

    const addValue = () => {
      if(counter < 20){
        counter++;
        setCounter(counter);
        console.log("clicked", counter);
      }else{
        counter = 20;
      }
    }

    const removeValue = () => {
      if(counter > 0){
        counter--;
        setCounter(counter);
        console.log("Removed button clicked", counter);
      }else{
        counter = 0;
        console.log("remove buttone clicked", counter);
      }
    
    }

  return (
    <>
     <h1>Chai aur react</h1>
     <h1>counter value : {counter}</h1>

     <button onClick={addValue}>Add value {counter}</button>
     <br></br>
     <button onClick={removeValue}>Remove value {counter}</button>
     <p>footer : {counter}</p>
    </>
  )
}

export default App
