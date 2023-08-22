import { Link } from 'react-router-dom';
import introImg from '/images/01.png';

const Home = () => {
  return (
    <div className='intro'>
      <div className='container mx-auto px-[calc(4/1512*100vw)]'>
        <div className='flex gap-[calc(40/1512*100vw)]'>
          <img
            src={introImg}
            alt='img desc'
            className='w-[calc(566/1512*100vw)] h-[calc(564/1512*100vw)]'
          />
          <h1 className='intro__title text-[calc(80/1512*100vw)] leading-[calc(96/1512*100vw)] font-semibold'>
            Play a game
            <br /> STONE
            <br /> SCISSORS
            <br /> PAPER
            <br /> and WIN
          </h1>
        </div>
        <div className='text-right'>
          <Link
            to='/game'
            className='intro__btn p-[calc(24/1512*100vw)] text-[calc(50/1512*100vw)] font-bold rounded-[calc(26/1512*100vw)]'
          >
            FREE TO PLAY
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
