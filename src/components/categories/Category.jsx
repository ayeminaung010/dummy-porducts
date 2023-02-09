import React from 'react'
import { useGetAllCategoriesQuery } from '../../features/Category/CategoryApi'

const Category = ({user,token}) => {

    const {data,isLoading} = useGetAllCategoriesQuery(token);
  return (
    <div>
        {data?.map((i,index) => (
            <li key={index}>
                <a className=' capitalize'>{i}</a>
            </li>  
        ))}
        
        
    </div>
  )
}

export default Category