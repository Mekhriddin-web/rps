import useUsersStore from '../store';
import { getRandomDigit } from '../utils';

const ModalChose = ({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: (p: boolean) => void;
}) => {
  const { choseUserFigure, choseBotFigure } = useUsersStore(state => state);

  const handleChose = (figure: number) => {
    choseUserFigure(figure);
    choseBotFigure(getRandomDigit());
    closeModal(false);
  };

  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } fixed top-0 left-0 z-20 py-[calc(64/1512*100vw)] px-[calc(20/1512*100vw)] flex items-center justify-center w-full h-[100vh] bg-blackOpacity`}
    >
      <div className='max-w-[calc(806/1512*100vw)] h-full overflow-y-auto bg-white rounded-[calc(15/1512*100vw)] py-[calc(80/1512*100vw)] px-[calc(20/1512*100vw)]'>
        <h2 className='text-black text-center text-[40px] font-semibold'>
          Choice of figure
        </h2>
        <div className='relative mt-[calc(80/1512*100vw)] pt-[calc(40/1512*100vw)] pb-[calc(200/1512*100vw)] px-[calc(204/1512*100vw)] max-w-[calc(630/1512*100vw)] m-auto'>
          <img
            src='images/02.png'
            alt='img desc'
            className='w-[calc(212/1512*100vw)] h-[calc(216/1512*100vw)] m-auto'
          />
          <button
            className='absolute top-0 left-0'
            onClick={() => handleChose(0)}
          >
            <img
              src='images/s-icon-big.jpg'
              alt='scissors'
              className='w-[calc(190/1512*100vw)] h-[calc(190/1512*100vw)]'
            />
            <div className='opacity-0 hover:opacity-100 ease-in duration-300 cursor-pointer flex items-center justify-center absolute top-0 left-0 w-full h-full rounded-full bg-blackOpacity'>
              <p className='text-[calc(28/1512*100vw)] font-medium'>
                Choose
                <br /> ME
              </p>
            </div>
          </button>
          <button
            className='absolute top-0 right-0'
            onClick={() => handleChose(1)}
          >
            <img
              src='images/p-icon-big.jpg'
              alt='scissors'
              className='w-[calc(190/1512*100vw)] h-[calc(190/1512*100vw)]'
            />
            <div className='opacity-0 hover:opacity-100 ease-in duration-300 cursor-pointer flex items-center justify-center absolute top-0 left-0 w-full h-full rounded-full bg-blackOpacity'>
              <p className='text-[calc(28/1512*100vw)] font-medium'>
                Choose
                <br /> ME
              </p>
            </div>
          </button>
          <button
            className='absolute bottom-0 left-[50%] translate-x-[-50%]'
            onClick={() => handleChose(2)}
          >
            <img
              src='images/r-icon-big.jpg'
              alt='scissors'
              className='w-[calc(190/1512*100vw)] h-[calc(190/1512*100vw)]'
            />
            <div className='opacity-0 hover:opacity-100 ease-in duration-300 cursor-pointer flex items-center justify-center absolute top-0 left-0 w-full h-full rounded-full bg-blackOpacity'>
              <p className='text-[calc(28/1512*100vw)] font-medium'>
                Choose
                <br /> ME
              </p>
            </div>
          </button>
        </div>
        <p className='text-black text-center text-[calc(28/1512*100vw)] font-bold'>
          Select your figure and click on it. You will have 10 seconds to make a
          decision. If you don't make a decision, a random number generator will
          make the choice for you. You will play the game if you lose points are
          not returned!
        </p>
      </div>
    </div>
  );
};

export default ModalChose;
