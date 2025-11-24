import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cart from './components/Cart';

const App = () => {

  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  useEffect(function(){
    getData()
  },[index])

  const getData = async()=>{
    
    const res = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`);
    setUserData(res.data);
  }

  const printUserData = userData.map(function(item,i){
    return <Cart key={i} item={item}/>
  })

  return (
    <div className='w-full min-h-screen bg-zinc-900 p-10 text-white' >

      <h3 className='mb-4 text-3xl'>Weclome To Gallery</h3>

   <div className='flex flex-wrap gap-5  w-full min-h-screen mt-2 '>
       {printUserData}
   </div>

   <div className='flex justify-center items-center mt-5 gap-4'>
    <button onClick={()=>{
      
      if(index>1){
        setIndex(index-1);
      }
      
    }} className='px-3 py-2 bg-blue-500 rounded-md'>Pre</button>
    <h2>Page {index} </h2>
    <button onClick={()=>{
     setIndex(index+1);
      
    }} className='px-3 py-2 bg-blue-500 rounded-md' >Next</button>
   </div>
    
    </div>
  )
}

export default App
