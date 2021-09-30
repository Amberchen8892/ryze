import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import signupAnimation from '../animation/signup-two.json';
import MaterialLayout from '../components/Layout/MaterialLayout';
import CheckoutPage from '../components/CheckoutPage/CheckoutPage';

export default function Signup() {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector('#signup-animation'),
      animationData: signupAnimation,
    });
  }, []);

  return (
    <div className='signup-container'>
      <div className='row containerOne'>
        <div className='row'>
          {/* <div class='col-12 col-md-5'>
            <h1>Thank you for jonning us!</h1>
            <div id='signup-animation'></div>
          </div> */}
          <div
            class='col-12 col-md-12'
            // style={{ backgroundColor: 'transparent' }}
            className='signup-form-container'
          >
            <MaterialLayout style={{ BaseAudioContext: 'green' }}>
              <CheckoutPage />
            </MaterialLayout>
          </div>
        </div>
      </div>
    </div>
  );
}
