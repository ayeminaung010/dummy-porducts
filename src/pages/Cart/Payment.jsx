import { CardCvcElement, CardExpiryElement, CardNumberElement, CartElement } from '@stripe/react-stripe-js';
import Cookies from 'js-cookie';
import React from 'react'
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';


const Payment = () => {

  const remember_me = Cookies.get('remember_me');

  let user,token;
  if(remember_me === 'false'){ 
     user = JSON.parse(sessionStorage.getItem('user'));
     token = sessionStorage.getItem('token');
  }else{
     token = Cookies.get('token');
     user = JSON.parse(Cookies.get('user'));
  }

  const carts = useSelector((state) => state.cart);


  const CARD_ELEMENT_OPTIONS = {
    iconStyle: "solid",
    hidePostalCode: true,
    style: {
      base: {
        iconColor: "rgb(240, 57, 122)",
        color: "white",
        fontSize: "16px",
        fontFamily: '"Open Sans", sans-serif',
        fontSmoothing: "antialiased",
        "::placeholder": {
          color: "gray"
        }
      },
      invalid: {
        color: "#e5424d",
        ":focus": {
          color: "wheat"
        }
      }
    }
  };

  return (
    <div>
      <Navbar user={user} token={token} carts={carts}/>
      <div className="">
        <div className="flex justify-center mt-10">
          <ul className="steps steps-horizontal grid-cols-6 md:grid-cols-12 ">
            <li className="step step-primary col-span-5">Cart</li>
            <li className="step col-span-4 step-primary">Shipping</li>
            <li className="step col-span-5 step-primary ">Payments</li>
          </ul>
        </div>

        <div className="">
          <Link to={'/carts/shipping'} className="btn ">
              <MdOutlineArrowBackIosNew/>
          </Link>
        </div>

        <div className=" mt-10">
          <form>
            <div className="">
              <div className="form-control w-52">
                <label className="label">
                  <span className="label-text">Card number</span>
                </label>
                <CardNumberElement
                options={CARD_ELEMENT_OPTIONS}
                className={'w-76 rounded border-2 bg-gray-800 py-3 px-6'}
                />
              </div>
              <div className=" flex flex-wrap gap-5">
                <div className="form-control w-28">
                  <label className="label">
                    <span className="label-text">Expiration date</span>
                  </label>
                  <CardExpiryElement
                  options={CARD_ELEMENT_OPTIONS}
                  className='rounded border-2 bg-gray-800 py-3 px-6'
                  />
                </div>
                <div className="form-control w-20">
                  <label className="label">
                    <span className="label-text">CVC</span>
                  </label>
                  <CardCvcElement
                  options={CARD_ELEMENT_OPTIONS}
                  className='rounded border-2 bg-gray-800 py-3 px-6'
                  />
                </div>
              </div>
            
            </div>
            <button type="button" className=' btn' >
              Pay
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Payment