import React from 'react';
import animationData from '../assets/data.json'
import Lottie from 'react-lottie';
import './Modal.css';
import FormBtn from '../registrationPage/eventregistration/components/Buttons/FormButton';
import { NavLink } from 'react-router-dom';
import arrowlink1 from '../assets/link-arrow-1.svg'
import arrowlink2 from '../assets/link-arrow-2.svg'
import { useNavigate } from 'react-router-dom';


const SuccessModal = ({ onClose, message, secondMessage, thirdMessage, btnFor }) => {

  const navigate = useNavigate();


    const handleNavigate = () => {
      // Replace '/' with the desired homepage route if it's different from '/'
      navigate('/');
    };

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData, // This is the imported animation data
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        

        <div className="modal-header">

            <div className="success-animation">
                <Lottie options={defaultOptions} />
            </div>
        
        </div>
        <div className='modal-content'>
            <div className='modal-text'>
                <h1>Congratulations!</h1>
                <p>{message}</p>
                <small>{secondMessage}</small>
                <h2>{thirdMessage}</h2>
            </div>
            <FormBtn btnFor={btnFor} onClick={handleNavigate} />
        </div>
        <div className='modal-links'>
            <NavLink to={"/grant"} className="grant-link">Apply for Grant<img src={arrowlink1} alt='' /></NavLink> 
            <NavLink to={"/techsupport"} className="scholarship-link">Apply for Scholarship<img src={arrowlink2} alt="" /></NavLink> 
        </div>
        
      </div>
    </div>
  );
};

export default SuccessModal;
