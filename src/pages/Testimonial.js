import React from 'react';
import { Carousel } from 'react-bootstrap';
import john from '../images/testimonial-images/john.svg';
import taya from '../images/testimonial-images/tanya.svg';
import patternQuotes from '../images/testimonial-images/pattern-quotes.svg';
import patternCurve from '../images/testimonial-images/pattern-curve.svg';
const users = [
  {
    name: 'Tanya Sinclair',
    role: 'Recent Customer',
    feedback: '“I am impressed! For signing up with RYZE, I can acccess my credit score report anytime and get new update once a month. ”',
    image: `${taya}`,
  },
  {
    name: 'John Tarkpor',
    role: 'Recent Customer',
    feedback:
      '“I am using Identity Protection as a safeguard to protect myself from a recent ID theft that involved a person impersonating a famous celebrity. I was duped because the con was very convincing. With RYZE I fell more secure with the knowledge that someone other than myself is looking over me. ”',

    image: `${john}`,
  },
];

export default function Login() {
  return (
    <Carousel variant="dark" style={{ width: '100vw' }}>
      {users.map((user) => (
        <Carousel.Item interval={2000} style={{ width: '100vw' }}>
          <div className="testimonial-section-container">
            <div className="testimonial-section">
              <div className="slider-container">
                <div className="image">
                  <img src={user.image} alt="" />
                </div>
              </div>
              <div className="feedback">
                <img src={patternQuotes} alt="" />
                <p>{user.feedback} </p>
                <h4 className="name">{user.name}</h4>
                <h4 className="role">{user.role}</h4>
              </div>
              <img className="curve" src={patternCurve} alt="" />
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
