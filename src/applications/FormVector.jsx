import formVector from '../assets/formVector.svg'

const FormVector = ({position}) => {
    return ( 
        <>
            <img src={formVector} className={`absolute ${position}`} alt="" />
        </>
     );
}
 
export default FormVector;