import text from '../../../assets/speakerText.png';

const SpeakerCard = ({ speaker, position, animationDirection }) => {
  let cardHeightClass = '';
  if (position === 2) {
    cardHeightClass = 'h-80 w-72 lg:h-96 lg:w-96 z-20 bg-bgColor border border-bgColor';
  } else if (position === 1 || position === 3) {
    cardHeightClass = 'h-72 z-10 bg-bgColor border border-bgColor';
  } else {
    cardHeightClass = 'h-64 bg-bgColor border border-bgColor';
  }
  let animationClass = '';
  if (animationDirection === 'left') {
    animationClass = position === 0 ? 'animate-enter-left' : 'animate-exit-right';
  } else if (animationDirection === 'right') {
    animationClass = position === 4 ? 'animate-enter-right' : 'animate-exit-left';
  }
  return (
    <div className={`relative overflow-hidden w-56 p-4 rounded-lg shadow-md ${cardHeightClass} flex ${animationClass}`}>
      <div className={` ${position === 2 ? 'text-white' : 'text-white'} h-full`}>
        <div className={`relative ${position === 2 ? 'text-orange-600' : 'text-blue-600'}`}>
          Speaker
        </div>
        <h2 className="text-lg font-semibold">{speaker.name}</h2>
        <p>{speaker.position}</p>
      </div>
      <div className={`absolute right-0 ${position === 2 ? '-bottom-2 w-48 h-48':'-bottom-2 w-32 h-32'}`}>
        <div className={`absolute inset-0 bg-gradient-to-l from-transparent  ${position === 2 ? 'via-orange-600':'via-blue-600'} to-transparent rounded-full`} />
      </div>
      <img src={text} alt='' className="absolute bottom-0 right-0 w-1/4" />
      <img
        src={speaker.imageURL}
        alt={speaker.name}
        loading='lazy'
        className={`${position === 2 ? 'w-5/6' : 'w-4/5'} absolute bottom-0 right-0`}
      />
    </div>
  );
};

export default SpeakerCard;
