import { Link } from 'react-router-dom';
import introImg from '/public/01.png';

const Home = () => {
  return (
    <div className='intro'>
      <div className='container mx-auto px-4'>
        <div className='flex gap-[40px]'>
          <img src={introImg} alt='img desc' className='w-[566px] h-[564px]' />
          <h1 className='intro__title text-[80px] leading-[96px] font-semibold'>
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
            className='intro__btn p-[24px] text-[50px] font-bold rounded-[26px]'
          >
            FREE TO PLAY
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
