import React, { useState } from 'react';
import './Testimonials.css';
import arrowleft from '../../../assets/arrow-left.svg'
import arrowright from '../../../assets/arrow-right.svg';
import test1 from '../../../assets/testimonial 1.svg'
import q1 from '../../../assets/q1.svg'
import q2 from '../../../assets/q2.svg'

const Testimonials = () => {
  const totalSlides = 4; // Update this number according to the total number of slides
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to handle moving to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  // Function to handle moving to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className='container'>
      <div className='carousel'>

      <div className='heading'>
      <h1>Past attendees testimonials</h1>
      <p>TxE Summit 2022</p>
      </div>  

      <div className='indicators'>
          {Array.from({ length: totalSlides }, (_, index) => (
            <span
              key={index}
              className={`indicator-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        

        <div className='slider' style={{ transform: `translateX(-${(currentSlide * 100) / totalSlides}%)` }}>
          <section>
            <div>
                <img className='test-1' src={test1} alt="test-1"/>
            </div>
            <div className='quote'>
                <img className='q1' src={q1} alt='' />
                <h3>How TXE Africa caused a shift in my tech career</h3>
                <p>I was privileged to be among those awarded scholarship to learn any tech skill of my choice under Learnable internship, after completing the internship I got a job with one of the tech startups in Lagos to work remotely from  Enugu State.</p>
                <small>Vivian Nnoka, <span>Frontend Developer.</span></small>
                <img className='q2' src={q2} alt='' />
            </div>
          </section>
          <section>
            <div>
                <img className='test-1' src={test1} alt="test-1"/>
            </div>
            <div className='quote'>
                <img className='q1' src={q1} alt='' />
                <h3>How TXE Africa caused a shift in my tech career</h3>
                <p>I was privileged to be among those awarded scholarship to learn any tech skill of my choice under Learnable internship, after completing the internship I got a job with one of the tech startups in Lagos to work remotely from  Enugu State.</p>
                <small>Vivian Nnoka, <span>Frontend Developer.</span></small>
                <img className='q2' src={q2} alt='' />
            </div>
          </section>
          <section>
            <div>
                <img className='test-1' src={test1} alt="test-1"/>
            </div>
            <div className='quote'>
                <img className='q1' src={q1} alt='' />
                <h3>How TXE Africa caused a shift in my tech career</h3>
                <p>I was privileged to be among those awarded scholarship to learn any tech skill of my choice under Learnable internship, after completing the internship I got a job with one of the tech startups in Lagos to work remotely from  Enugu State.</p>
                <small>Vivian Nnoka, <span>Frontend Developer.</span></small>
                <img className='q2' src={q2} alt='' />
            </div>
          </section>
          <section>
            <div>
                <img className='test-1' src={test1} alt="test-1"/>
            </div>
            <div className='quote'>
                <img className='q1' src={q1} alt='' />
                <h3>How TXE Africa caused a shift in my tech career</h3>
                <p>I was privileged to be among those awarded scholarship to learn any tech skill of my choice under Learnable internship, after completing the internship I got a job with one of the tech startups in Lagos to work remotely from  Enugu State.</p>
                <small>Vivian Nnoka, <span>Frontend Developer.</span></small>
                <img className='q2' src={q2} alt='' />
            </div>
          </section>
          
        </div>
        <div className='control'>
          {/* <span className='arrow left' onClick={prevSlide}>
            Left
          </span> */}
          <img className='arrow left' onClick={prevSlide} src={arrowleft} alt='' />
          <img className='arrow right' onClick={nextSlide} src={arrowright} alt='' />
          {/* <span className='arrow right' onClick={nextSlide}>
            Right
          </span> */}
        </div>
       
      </div>
    </div>
  );
};

export default Testimonials;
