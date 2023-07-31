import formVector from '../assets/decor.svg'

const FormVector = ({position}) => {
    return ( 
        <>
            <img src={formVector} className={`absolute ${position} `} alt="" />
        </>
     );
}
 
export default FormVector;