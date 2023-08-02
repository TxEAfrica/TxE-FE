import airtel from '../../assets/sponsors/airtel.png'
import rite from '../../assets/sponsors/Rite.svg'
import veemost from '../../assets/sponsors/VeeMost.svg'
import xend from '../../assets/sponsors/XendFinance.svg'
import Williams from '../../assets/sponsors/Williams Uchemba Foundation.svg'
import buildspace from '../../assets/sponsors/buildspace.svg'
import spaceInAfrica from '../../assets/sponsors/spaceInAfrica.svg'

const Sponsors = () => {
    const images = [airtel, rite, veemost, xend, Williams, buildspace, spaceInAfrica];
  
    return (
      <div className='flex flex-col justify-center items-center p-6 bg-white shadow-sm rounded-md lg:w-3/4 overflow-hidden'>
        <h1 className='text-lg font-semibold'>
          <i>Proudly Sponsored By</i>
        </h1>
        <div className='slide-container'>
          <div className='slide-wrapper'>
            {images.map((src, index) => (
              <img key={index} src={src} loading='lazy' className='mx-8 md:mx-16' alt="" />
            ))}
            {images.map((src, index) => (
              <img key={index + images.length} src={src} loading='lazy' className='mx-8 md:mx-16' alt="" />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Sponsors;