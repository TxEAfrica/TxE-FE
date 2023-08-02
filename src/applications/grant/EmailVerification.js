// EmailVerification.js
import React, { useState } from 'react';
import InputField from '../../registrationPage/eventregistration/components/InputField/InputField';
import FormBtn from '../../registrationPage/eventregistration/components/Buttons/FormButton';
// import ButtonsCSS from './components/Buttons/ButtonsCSS.module.css'
import ApplyForGrantCSS from '../grant/ApplyForGrant.module.css'
import FailedModal from '../../modals/FailedModal'
import SuccessModal from '../../modals/SuccessModal';

const EmailVerification = ({ onSuccess, onUserData }) => {
  const [email, setEmail] = useState('');
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [verificationFailed, setVerificationFailed] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailedModal, setShowFailedModal] = useState(false);

  const [userData, setUserData] = useState([])

  const handleVerifyEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://txe-africa.onrender.com/api/v1/${email}`);

      if (response.ok) {
        setIsEmailVerified(true);
        setVerificationFailed(false);
        const data = await response.json();

        // Pass the data to the parent component using the onUserData callback
        if (onUserData) {
          onUserData(data);
        }

        if (onSuccess) {
          onSuccess();
          console.log(data)
        }
      } else {
        setIsEmailVerified(false);
        setVerificationFailed(true);
      }
    } catch (error) {
      console.error('Error verifying email:', error);
      setIsEmailVerified(false);
      setVerificationFailed(true);
    }
  };

  return (
    <div className={ApplyForGrantCSS.mainn}>

      <form>
        <InputField
            labelText="Email Address"
            placeholder={"Verify email address"}
            htmlFor="email" 
            inputId="email" 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
              
        <div>
          <FormBtn btnFor={"Next"} onClick={handleVerifyEmail} />
        </div>
      </form>
        {verificationFailed && 
        <div>
          <FailedModal
            onClose={() => setShowFailedModal(false)}
            message={"You need to register for the event"}
            secondMessage={"Then you can come back and apply for a Grant"}  
          />
        </div>}

    </div>
  );
};

export default EmailVerification;
