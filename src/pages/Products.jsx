import React from 'react'
import CardProduct from '../components/CardProduct';
import Loader from '../components/Loader';
import { useGetProductsQuery } from '../features/Products/productApi'

const Products = ({user,token}) => {
    const {data,isLoading} = useGetProductsQuery(token);

  return (
    <div >
        {isLoading ? (<Loader/>)
       :
        (<div className=' flex flex-wrap mt-10 gap-6 justify-center'>
            {data?.products?.map((product) => (
                    <CardProduct key={product?.id} product={product}/>
              ) )}
        </div>)}
    </div>
  )
}

export default Products