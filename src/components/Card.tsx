import { useEffect, useState } from 'react';
import iconDiceUrl from '../images/icon-dice.svg';
import dividerDesktopUrl from '../images/pattern-divider-desktop.svg';
import spinnerUrl from '../images/spinner.svg';

type adviceType = {
  slip: {
    id: number;
    advice: string;
  };
};

export function Card() {
  const [advice, setAdvice] = useState<adviceType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(getAdvice, []);

  function getAdvice() {
    setAdvice(null);
    setLoading(true);
    fetch('https://api.adviceslip.com/advice', { cache: 'no-cache' })
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data);
        setLoading(false);
      });
  }
  return (
    <div className='relative bg-neutral-grayBlue-700 text-primary-green text-center w-[400px] p-9 rounded-xl'>
      {loading && (
        <div className='flex justify-center py-6'>
          <img src={spinnerUrl} className='w-8'></img>
        </div>
      )}
      {advice && (
        <>
          <div className='text-xs tracking-[0.25em] mb-5'>
            ADVICE #{advice.slip.id}
          </div>

          <div className='text-primary-cyan text-xl font-extrabold mb-5'>
            {advice ? `“${advice.slip.advice}”` : null}
          </div>
          <img src={dividerDesktopUrl} className='mb-5'></img>
          <button
            onClick={getAdvice}
            className='absolute left-0 right-0 bottom-0 translate-y-1/2 mx-auto w-fit rounded-full bg-primary-green p-4'
          >
            <img src={iconDiceUrl}></img>
          </button>
        </>
      )}
    </div>
  );
}
