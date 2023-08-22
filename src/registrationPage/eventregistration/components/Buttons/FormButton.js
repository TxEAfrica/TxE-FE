
import ButtonsCSS from "./ButtonsCSS.module.css";

const FormBtn = ({btnFor, onClick, isLoading}) => {
  return (
    <div className='h-16 p-3'>
      <button 
        onClick={onClick} 
        className={`${!isLoading?ButtonsCSS.formbutton:'bg-gray-200/80 p-3 rounded-md w-full flex justify-center items-center cursor-not-allowed'}`} 
        type='submit'
        disabled={isLoading}>
          {btnFor}
      </button>
    </div>
  )
}

export default FormBtn
