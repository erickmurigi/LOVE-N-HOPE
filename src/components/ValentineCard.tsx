import { useState } from 'react';
import NoButton from './NoButton';
import SuccessState from './SuccessState';
import CelebrationEffect from './CelebrationEffect';

const ValentineCard = () => {
  const [hasAccepted, setHasAccepted] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  const handleYesClick = () => {
    setShowCelebration(true);
    setTimeout(() => {
      setHasAccepted(true);
    }, 300);
  };

  if (hasAccepted) {
    return (
      <>
        <CelebrationEffect isActive={showCelebration} />
        <SuccessState />
      </>
    );
  }

  return (
    <>
      <CelebrationEffect isActive={showCelebration} />
      <div className="page-content text-center px-4 max-w-3xl mx-auto">
        {/* Decorative hearts */}
        <div className="flex justify-center gap-3 mb-6 text-3xl opacity-80">
          <span>💕</span>
          <span>💗</span>
          <span>💕</span>
        </div>

        {/* Main heading */}
        <h1 className="heading-romantic text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
          Hey RAMS aka TETS (MY ADRENALINE), Will You Be My Valentine?
        </h1>

        {/* Romantic subtitle */}
        <p className="subtitle-romantic text-lg md:text-xl lg:text-2xl max-w-xl mx-auto mb-10 leading-relaxed">
        EXCEPT FOR YOU KNOW WHAT YOU DID... I'M DEVASTATED BY THAT. BUT IT'S ALL GOOD, THIS COULD'VE BEEN YOU. 💖
        </p>

        {/* Buttons container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
          <button
            className="btn-yes active:scale-95"
            onClick={handleYesClick}
          >
            Yes 💖
          </button>
          
          <NoButton />
        </div>

        {/* Playful hint */}
        <p className="text-muted-foreground text-sm opacity-70 italic">
          (Hint: There's really only one right answer here 😉)
        </p>
      </div>
    </>
  );
};

export default ValentineCard;
