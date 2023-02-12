import React from 'react'
import { Link } from 'react-router-dom';
import { useGetAllCategoriesQuery } from '../../features/Category/CategoryApi'
import CategoryLoader from '../Loading/CategoryLoader';

const Category = ({user,token}) => {

    const {data,isLoading} = useGetAllCategoriesQuery(token);
  return (
    <div>
        {isLoading? (<CategoryLoader/>) : (
          <div className="">
            {data?.map((i,index) => (
                <li key={index}>
                    <Link to={`/products/category/${i}`} className=' capitalize'>{i}</Link>
                </li>  
            ))}
          </div>
        )}
      
    </div>
  )
}

export default Category