const SpeakerCard = ({ speaker, position, animationDirection }) => {
  const cardHeightClass =
    position === 2
      ? 'h-80 w-72 lg:h-96 lg:w-96 z-20 bg-bgColor border border-bgColor'
      : position === 1 || position === 3
      ? 'h-72 z-10 bg-bgColor text-sm border border-bgColor'
      : 'h-64 z-5 bg-bgColor text-sm border border-bgColor';

  const transformValue = animationDirection === 'left' ? '-1%' : '8%';

  return (
    <div
      className={`relative overflow-hidden w-56 p-4 rounded-lg shadow-md ${cardHeightClass} flex transition-transform`}
      style={{ transform: `translateX(${transformValue})`,
               transition: 'transform 0.8s ease-in-out' }}
    >
      <div className={` ${position === 2 ? 'text-white' : 'text-white'} h-full`}>
        <div className={`relative ${position === 2 ? 'text-speakerTextBrown' : 'text-speakerTextBlue'}`}>
        <p>{speaker.position}</p>
        </div>
        <h2 className={`font-semibold w-5 mt-2 ${position === 2 ? 'text-4xl':'text-lg'}`}>{speaker.name}</h2>
      </div>
      <div className={`absolute right-0 ${position === 2 ? '-bottom-16 w-56 h-56 lg:w-72 lg:h-72' : '-bottom-5 w-48 h-48'}`}>
        <div className={`absolute inset-0 bg-gradient-to-l from-transparent  ${position === 2 ? 'via-orange-600/40' : 'via-blue-600/40'} to-transparent rounded-full`} />
      </div>
      <img src={speaker.imageURL} alt={speaker.name} loading="lazy" className={`${position === 2 ? 'w-4/6' : 'w-2/3 md:w-4/5'} absolute bottom-0 right-0`} />
    </div>
  );
};

export default SpeakerCard;
