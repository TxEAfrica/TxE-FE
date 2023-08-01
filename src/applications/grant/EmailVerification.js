// EmailVerification.js
import React, { useState } from 'react';
import InputField from '../../registrationPage/eventregistration/components/InputField/InputField';
import FormBtn from '../../registrationPage/eventregistration/components/Buttons/FormButton';
// import ButtonsCSS from './components/Buttons/ButtonsCSS.module.css'
import ApplyForGrantCSS from '../grant/ApplyForGrant.module.css'

const EmailVerification = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [verificationFailed, setVerificationFailed] = useState(false);

  const handleVerifyEmail = () => {
    // Call the email verification API using axios
    // If successful, call onSuccess() to proceed to the next section
    // If verification fails, setVerificationFailed(true)
  };

  return (
    <div className={ApplyForGrantCSS.mainn}>

      <form>
        <InputField
            labelText="Email Address"
            placeholder={"Verify email address"}
            htmlFor="email" // Pass the htmlFor prop for label element
            inputId="email" // Pass the inputId prop for input element
            type="text" // Pass the type prop for input element
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
              
        <div>
          <FormBtn btnFor={"Next"} />
        </div>
        {verificationFailed && <div>Failed to verify email. Please try again.</div>}
      </form>

    </div>
  );
};

export default EmailVerification;
