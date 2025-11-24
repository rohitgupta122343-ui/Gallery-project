import React from 'react'

const Cart = (props,i) => {
    const {item} = props;
  return (
    <a key={i} href={props.item.url}>
      <div>
       <div className='w-50 h-70 overflow-hidden transition-all duration-300 rounded-md' >
      <img  className='w-full h-[80%] object-cover rounded-md hover:opacity-50 ' src={item.download_url} alt="pictures" />
       <h2 className='mt-2'>Author: {item.author}</h2>
    </div>
   
    </div>
    </a>
  )
}

export default Cart
