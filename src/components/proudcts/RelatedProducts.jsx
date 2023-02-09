import React from 'react'
import { useGetProductsCategoryQuery } from '../../features/Products/productApi';

const RelatedProducts = ({category,token}) => {

    const {data}  = useGetProductsCategoryQuery({category,token});
    console.log(data?.products);
  return (
    <div>
        {data?.products.map((i) => {
            
        })}
    </div>
  )
}

export default RelatedProducts