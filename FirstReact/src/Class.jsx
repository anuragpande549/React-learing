import { useState } from "react"
import App from "./App.jsx"

function Class() {

    let [counter, setCounter] = useState(0);
    let addValue = ()=> {
        if(counter < 20){
            return setCounter(counter + 1)};
        }
        
    let removeValue = ()=> {
        if(counter > 0){
            return setCounter(counter - 1)};
        };
    return <>

     <h1>this is a counter number <br /> {counter}</h1>
     <button onClick={addValue}>Add Value max 20 </button>
     <br /><br />
     <button onClick={removeValue}>remove Value min 0</button>

    </>

}

export default Class