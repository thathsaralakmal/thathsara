import React from 'react'
import { useAppContext } from '../context/AppContext'

const AllProducts = () => {

const {Products}= useAppContext()

  return (
    <div className='mt-16 flex flex-col' >
       <div className='flex flex-col items-end w-max'>
        <p>All products</p>
         <div  className='w-16 h-0.5 bg-primary rounded-full'></div>
      </div>
    </div>
  )
}

export default AllProducts