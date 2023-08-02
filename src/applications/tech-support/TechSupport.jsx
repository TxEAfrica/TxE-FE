import InputField from "../../registrationPage/eventregistration/components/InputField/InputField";
import InputOption from "../../registrationPage/eventregistration/components/InputOption/InputOption";
import InputSelect from "../../registrationPage/eventregistration/components/InputSelect/InputSelect";

const TechSupport = ({
  supportInterest, 
  setSupportInterest, 
  firstName,
  lastName,
  email,
  setGender,
  phoneNumber}) => {
    return ( 
        <>
             <div className="flex justify-between space-x-3">
                       <div className="w-1/2">
                       <InputField
                          labelText={'First Name'}
                          htmlFor={'firstname'}
                          type={'text'}
                          onChange={(e)=>firstName(e.target.value)}
                        />
                       </div>

                        <div className="flex-1">
                        <InputField
                          labelText={'Last Name'}
                          htmlFor={'lastname'}
                          type={'text'}
                          onChange={(e)=>lastName(e.target.value)}
                        />
                        </div>
                      </div>
                      <div>
                       <InputField
                          labelText={'Email address'}
                          htmlFor={'email'}
                          type={'email'}
                          onChange={(e)=>email(e.target.value)}
                        />
                       </div>
                       <div className="flex justify-between space-x-3">
                       <div className="w-1/2">
                          <InputSelect 
                              labelText={'Gender'} 
                              htmlFor={'gender'}
                              options={[{label:'Gender', value:'Gender'},
                                      {label:'Male', value:'Male'},
                                      {label: 'Female', value: 'Female'},
                                      {label: 'Other', value: 'Other'}]}
                              onChange={(e)=>setGender(e.target.value)}
                          />
                       </div>

                        <div className="flex-1">
                        <InputField
                          labelText={'Phone Number'}
                          htmlFor={'phoneNumber'}
                          type={'tel'}
                          onChange={(e)=>phoneNumber(e.target.value)}
                        />
                        </div>
                      </div>

                      <div className="h-fit w-full">
                        <InputOption 
                            descriptionLabelText={'What support are you interested in?'} 
                            options={[{label:'Scholarship', value:'Scholarship'},
                                    {label: 'Laptop', value: 'Laptop'}]}
                            initialSelection={supportInterest}
                            updatedSelection={setSupportInterest}
                        />
                      </div>
        </>
     );
}
 
export default TechSupport;