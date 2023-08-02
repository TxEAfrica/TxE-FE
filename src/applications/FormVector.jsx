import formVector from '../assets/decor.svg'

const FormVector = ({position}) => {
    return ( 
        <>
            <img src={formVector} loading='lazy' className={`absolute ${position} `} alt="" />
        </>
     );
}
 
export default FormVector;