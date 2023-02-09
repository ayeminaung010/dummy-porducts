import React from 'react'
import Carousel from 'react-multi-carousel';
import { useGetProductsCategoryQuery } from '../../features/Products/productApi';
import 'react-multi-carousel/lib/styles.css';

import Slider from './Slider';

const RelatedProducts = ({id,category,token}) => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

    const {data}  = useGetProductsCategoryQuery({category,token});
    let productData = [];
    //get different products with current detail id
    data?.products.map((i) => {
      if(i.id != id) {
        productData.push({'id': i.id, 'title': i.title, 'description': i.description ,'thumbnail' : i.thumbnail ,'price' : i.price ,'discountPercentage': i.discountPercentage ,'rating' : i.rating})
      }else{
        return;
      }
     })
    

    const product = productData.map((i) => (
      <Slider
        key={i.id} 
        title={i.title} 
        description={i.description} 
        thumbnail={i.thumbnail}
        discountPercentage={i.discountPercentage}
        price={i.price}
        rating={i.rating}
        id={i.id}
      />
    ));

  return (
    <div className='mt-32 mx-14 my-10'>
        <Carousel
         showDots={true} 
         autoPlay={true}
         autoPlaySpeed={1000} 
         customTransition="all .9" 
         responsive={responsive}
         transitionDuration={500}
        
         >
            {product}
        </Carousel>
    </div>
  )
}

export default RelatedProducts
