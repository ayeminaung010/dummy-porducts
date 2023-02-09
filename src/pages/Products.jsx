import React from 'react'
import CardProduct from '../components/CardProduct';
import Category from '../components/categories/Category';
import Loader from '../components/Loader';
import { useGetProductsQuery } from '../features/Products/productApi'

const Products = ({user,token}) => {
    const {data,isLoading} = useGetProductsQuery(token);

  return (
    <div >
        {isLoading ? (<Loader/>)
       :
        (<div>
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
              {/* products  */}
              <div className=' flex flex-wrap mt-10 gap-6 justify-center'>
                  {data?.products?.map((product) => (
                          <CardProduct key={product?.id} product={product}/>
                    ) )}
              </div>
              
            </div> 

            {/* side bar drawer category  */}
            <div className="drawer-side">
              <label htmlFor="my-drawer" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                <li className=' font-bold text-xl'>Categories</li>
                <Category user={user} token={token}/>
              </ul>
            </div>
          </div>
          
        </div>)}
    </div>
  )
}

export default Products