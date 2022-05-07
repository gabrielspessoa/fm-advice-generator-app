import iconDiceUrl from '../images/icon-dice.svg';

export function Card() {
  return (
    <div className='bg-neutral-grayBlue-500 text-primary-green text-center w-[420px] p-9'>
      <span>ADVICE #117</span>

      <div className='text-primary-cyan'>
        "Don't put off breaking up with someone when you know you want to.
        Prolonging the situation only makes it worse."
      </div>
      <button className='relative rounded-full bg-primary-green p-4'>
        <img src={iconDiceUrl}></img>
      </button>
    </div>
  );
}
