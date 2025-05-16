import React, {  useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import ProductCard from '../components/ProductCard'

const AllProducts = () => {

      const {products, searchQuery } = useAppContext()
      const [filteredProducts, setFilteredProducts] = useState([])

      useEffect(()=>{
          if(searchQuery.length > 0){
            setFilteredProducts(products.filter(
                product => product.name.toLowerCase().inCludes(searchQuery.
                  toLowerCase())
            ))}else{
                  setFilteredProducts(products)
            }
      },[products, searchQuery])

  return (
    <div className='mt-16 flex flex-col'>
     <div className='flex flex-col item-end w-max'>
        <p className='text-2xl font-medium uppercase'>All products</p> 
        <div className='w-16 h-0.5 bg-primary rounded-full'></div> 
     </div>

<div>
  {filteredProducts.filter((product)=> product.inStock).map((product,
    index)=>(
      <ProductCard key={index} product={product} />
  ))}
</div>



    </div>
  )
}

export default AllProducts