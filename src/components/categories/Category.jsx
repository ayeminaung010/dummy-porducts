import React from 'react'
import { Link } from 'react-router-dom';
import { useGetAllCategoriesQuery } from '../../features/Category/CategoryApi'

const Category = ({user,token}) => {

    const {data,isLoading} = useGetAllCategoriesQuery(token);
  return (
    <div>
        {data?.map((i,index) => (
            <li key={index}>
                <Link to={`/products/category/${i}`} className=' capitalize'>{i}</Link>
            </li>  
        ))}
      
    </div>
  )
}

export default Category