import React, { useState } from "react";
import ContentLoader from "react-content-loader";
import CookieConsent from "react-cookie-consent";


const CookieAccept = () => {
    const [Accept,setAccept] = useState(false);

    const handleAccept = () =>{
        setAccept(true);
        
    }
    
  return (
    <div>
      <CookieConsent debug={true}
        buttonText={'Accept'}
        style={{ background: 'black' }}
        buttonStyle={{ borderRadius:'20px',backgroundColor:'white',color : 'black' }}
        onAccept={handleAccept}
        >
        This site uses cookies.See our <a href="#">private policy</a> for more.
      </CookieConsent>

    </div>
  );
};

export default CookieAccept;
