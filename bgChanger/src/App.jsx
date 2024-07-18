import { useState } from 'react'
// import './App.css'

function App() {
  const [color, setColor] = useState('#242424')
  function bgColorSet(){
    let bgcolor = document.querySelectorAll('#color');
    let body = document.querySelector('body');
    bgcolor.forEach(function(bgcolor){
      bgcolor.addEventListener('click', function(e){
        let value = getComputedStyle(bgcolor).background;
        console.log(value);
        setColor(value);
      })
    })
  }
  bgColorSet()

  return (
    <>
    <body className='flex justify-center items-center w-[100%] h-[100vh] ' style={{background : color}}>
    <div className="grid w-[500px] h-[70vh] bg-[#242424] shadow-lg rounded-lg gap-3  shadow-blue-500/50 border  ">
    <h1 className='text-white text-center text-5xl mt-3 font-bold'>Change Baground color by click box </h1>
      <div id="color" className=" text-center text-white bg-blue-500 shadow-lg mx-10 rounded-lg rounded-t-md shadow-blue-500/50">blue</div>
      <div id="color" className="text-center text-white bg-cyan-500 shadow-lg mx-10 rounded-lg shadow-cyan-500/50">Cyan</div>
      <div id="color" className=" text-center text-white bg-indigo-500 shadow-lg mx-10 rounded-lg shadow-indigo-500/50">indigo</div>
      <div id="color" className="text-center text-white bg-slate-600 shadow-lg rounded-md mx-10 mb-5   shadow-slate-500/50">Slate</div>
    </div>
    </body>
    
    </>
  )
}

export default App
