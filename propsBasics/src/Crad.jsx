import React from "react";
import './App.css'

function Card(props){
    let image = props.image
    let myMassage = props.myMassage


    return( <>
    <section className='flex justify-center items-center h-[100vh] border border-red-100 bg-yellow-300'>
      
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-50">
      <img className="w-full" src={image} alt="Sunset in the mountains"/>
       <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
      <p className="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
      </p>
      </div>
      <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{myMassage}</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div>
      </section>
      
    </>
        
    );
}

export default Card