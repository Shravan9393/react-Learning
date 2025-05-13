import React from 'react'

function Card(props) {
  console.log(props.userName);
  console.log(props.link);

  return (
   
      <div className="relative h-[400px] w-[300px] rounded-md">

  <img src="https://images.pexels.com/photos/31110027/pexels-photo-31110027/free-photo-of-elegant-fashion-portrait-in-london.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />

<div className="absolute inset-0 bg-gradient-to-t
Ofrom-gray-900 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-left">
  <h1 className = "text-lg font-semibold text-white">{props.userName}</h1>
  <p className="mt-2 text-sm text-gray-300">
    Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Excepturi,
    debitis?
  </p>
  <button className="mt-2 inline-flex cursor-pointer
  items-center text-sm font-semibold text-white"> View Profile
  </button>
  
  </div>
  </div>
  )
}

export default Card
