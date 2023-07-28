import { Icon } from '../../icons/Icons'
import win from '../../assets/txe-win1.png'
import scholarship from '../../assets/scholarship.png'
import win1 from '../../assets/txe-win2.png'

const Highlight = () => {
    return ( 
        <div className='px-8 md:px-20 py-10 bg-orange-50'>
            <div className='flex flex-col justify-center items-center md:mb-20'>
           <h1 className='text-3xl font-bold'>
            Highlights
            </h1>
            <div className='text-lg mt-3 flex flex-col justify-center items-center'>
                TxE summit 2023
                <div className='flex space-x-2 mt-2'>
                <div className='w-10 h-2 rounded-full bg-orange-500'></div>
                <div className='w-10 h-2 rounded-full bg-black'></div>
                </div>
            </div>
           </div>
           
           <div className="md:flex ">
            <div className='py-8 flex flex-col justify-center items-center'>
            <div className="bg-green-200 px-4 py-8 rounded-md h-fit  space-y-4">
                <div className='w-fit h-fit rounded-md overflow-none'>
                <img src={win} alt="" />
                </div>
                <h1 className='text-3xl font-bold'>
                    Business Grant
                </h1>
                <p>
                Lucky participants will be going home with valuable 
                scholarships from our incredible tech event! 🎉🏆
                </p>
                <div className="text-orange-500 flex">
                    Apply <Icon.Arrow className='mx-2 -rotate-45 my-auto' />
                </div>
            </div>
            </div>

            <div className="bg-orange-200 px-4 py-8 rounded-md border-4 border-black space-y-4">
                <div className='w-fit h-fit rounded-md overflow-none'>
                <img src={win1} alt="" />
                </div>
                <h1 className='text-3xl font-bold'>
                    Free Laptops
                </h1>
                <p>
                Lucky participants will be going home with valuable 
                scholarships from our incredible tech event! 🎉🏆
                </p>
                <div className='flex'>
                    Apply <Icon.Arrow className='mx-2 -rotate-45 my-auto' />
                </div>
            </div>

            <div className='py-8 flex flex-col justify-center items-center'>
            <div className="bg-purple-200 h-fit px-4 py-8 rounded-md space-y-4">
                <div className='w-fit h-fit rounded-md overflow-none'>
                <img src={scholarship} alt="" />
                </div>
                <h1 className='text-3xl font-bold'>
                    Tech Scholarships
                </h1>
                <p>
                Lucky participants will be going home with valuable 
                scholarships from our incredible tech event! 🎉🏆
                </p>
                <div className="text-orange-500 flex">
                    Apply <Icon.Arrow className='mx-2 -rotate-45 my-auto' />
                </div>
            </div>
            </div>
        </div>
        </div>
        
     );
}
 
export default Highlight;