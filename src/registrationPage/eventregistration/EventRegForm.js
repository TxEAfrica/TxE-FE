import React, { useState} from 'react';
import EventRegCSS from './EventRegForm.module.css';
import InputField from './components/InputField/InputField';
import InputSelect from './components/InputSelect/InputSelect';
import InputOption from './components/InputOption/InputOption';
import decor from '../../assets/decor.svg';
import FormBtn from './components/Buttons/FormButton';

const EventRegForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [bestDescription, setBestDescription] = useState('');
    const [trackInterest, setTrackInterest] = useState('');

    const EventReg = {
        firstName,
        lastName,
        gender,
        phoneNumber,
        email,
        bestDescription,
        trackInterest,
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(EventReg) 
    }
      
  
    // Radio button options for "Which of the following best describes you?"
    const bestDescriptionOptions = [
      { label: 'Student', value: 'student' },
      { label: 'Undergraduate', value: 'undergraduate' },
      { label: 'BSc', value: 'bachelor' },
      { label: 'PhD', value: 'doctorate' },
    ];
  
    // Radio button options for "Which track are you interested in?"
    const trackInterestOptions = [
      { label: 'Entrepreneurship', value: 'entrepreneurship' },
      { label: 'Technology', value: 'technology' },
    ];

    // Dropdown button options for "Gender"
      const genderOptions = [
        { label: 'Select your gender', value: '' },
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' },
      ];

  return (
    <div className={EventRegCSS.main}>

      <img src={decor} alt='' className={EventRegCSS.decor1} />
      <img src={decor} alt='' className={EventRegCSS.decor2} />
      <img src={decor} alt='' className={EventRegCSS.decor3} />

      <div className={EventRegCSS.formtitle}>
        <h1>Register Now!</h1>
        <small>Reserve your Spot</small>
        <p>Fill the form carefully and correctly</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
            <InputField
                labelText="First Name"
                htmlFor="firstName" // Pass the htmlFor prop for label element
                inputId="firstName" // Pass the inputId prop for input element
                type="text" // Pass the type prop for input element
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <InputField
                labelText="Last Name"
                htmlFor="lastName" // Pass the htmlFor prop for label element
                inputId="lastName" // Pass the inputId prop for input element
                type="text" // Pass the type prop for input element
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
        </div>
        
        <div>
            <InputSelect
                labelText="Gender"
                htmlFor="gender" // Pass the htmlFor prop for label element
                selectId="gender" // Pass the selectId prop for select element
                value={gender}
                onChange={(e) => setGender(e.target.value)} // Pass the handleGenderChange function
                options={genderOptions} // Pass the options array for select element
                />

            
            <InputField
                labelText="Phone Number"
                htmlFor="phoneNumber" // Pass the htmlFor prop for label element
                inputId="phoneNumber" // Pass the inputId prop for input element
                type="text" // Pass the type prop for input element
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
        </div>

        <InputField
            labelText="Email"
            htmlFor="email" // Pass the htmlFor prop for label element
            inputId="email" // Pass the inputId prop for input element
            type="email" // Pass the type prop for input element
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        

        <InputOption
        descriptionLabelText="Which of the following best describes you?"
        options={bestDescriptionOptions}
        initialSelection={bestDescription}
        updatedSelection={setBestDescription}
        />

        <InputOption
        descriptionLabelText="Which track are you interested in?"
        options={trackInterestOptions}
        initialSelection={trackInterest}
        updatedSelection={setTrackInterest}
        />

    

        <div>
            <FormBtn btnFor={'Register'} />
        </div>


      </form>
    </div>
  );
};

export default EventRegForm;
