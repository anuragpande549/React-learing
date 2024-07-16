import React from "react";
import ReactDom from "react-dom/client";

//how react getElement inside 

function App() {

  const user = "i Am Anurag";
  
  const newElement = React.createElement(
    'a',
    {href: 'https://google.com',
      target: '_blank'},
      'click to vist google',
      user
      
      
    )
  return (
    <>
     {newElement}
    </>
  )
}

export default App
