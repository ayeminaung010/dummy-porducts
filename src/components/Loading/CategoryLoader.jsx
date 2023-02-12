import React from 'react'
import ContentLoader from 'react-content-loader'
import { RotatingSquare } from 'react-loader-spinner'

const CategoryLoader = () => {
  return (
    <div className=' flex item-center justify-center  '>
      <RotatingSquare
        height="100"
        width="100"
        color="#1e3a8a"
        ariaLabel="rotating-square-loading"
        strokeWidth="4"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  )
}

export default CategoryLoader