import React from 'react'
import ContentLoader from "react-content-loader"

const ProductDetailLoader = () => {
  return (
    <div className=' mt-10'>
         <div className="flex flex-wrap  justify-center items-center gap-5">
            <div className="">
                <ContentLoader 
                    speed={2}
                    width={300}
                    height={360}
                    viewBox="0 0 300 360"
                    backgroundColor="gray"
                  >
                    <rect x="-56" y="61" rx="2" ry="2" width="400" height="400" />
                  </ContentLoader>
                  <ContentLoader 
                    speed={2}
                    width={300}
                    height={360}
                    viewBox="0 0 300 360"
                    backgroundColor="gray"
                  >
                    <rect x="58" y="18" rx="2" ry="2" width="240" height="10" /> 
                    <rect x="58" y="34" rx="2" ry="2" width="240" height="10" /> 
                  </ContentLoader>
             </div>
             <div className=" ">
                <div className="">
                    <ContentLoader 
                        speed={2}
                        width={300}
                        height={360}
                        viewBox="0 0 300 360"
                        backgroundColor="gray"
                      >

                        <rect x="405" y="189" rx="3" ry="3" width="178" height="6" />
                        <rect x="9" y="4" rx="0" ry="0" width="320" height="22" />
                        <rect x="18" y="14" rx="0" ry="0" width="303" height="6" />
                        <rect x="11" y="33" rx="0" ry="0" width="108" height="13" />
                        <rect x="129" y="33" rx="0" ry="0" width="60" height="13" />
                        <rect x="196" y="33" rx="0" ry="0" width="60" height="13" />

                      </ContentLoader>
                </div>
             </div>

         </div>
    </div>
  )
}

export default ProductDetailLoader