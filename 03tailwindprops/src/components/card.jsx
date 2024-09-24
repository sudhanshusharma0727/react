import React from 'react'
// function Card(props){}
function Card({username,btnText="visit me here"}) {
  // console.log("Props: ",props);
  // console.log(props.username);
  console.log("username :",username);
  return (
    
<a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://images.pexels.com/photos/19553534/pexels-photo-19553534/free-photo-of-still-life-with-teapot.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hi this  is { username}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Hi {btnText}</p>
        <button>{btnText}</button>
    </div>
</a>

  )
}

export default Card