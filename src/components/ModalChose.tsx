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
      } fixed top-0 left-0 z-20 py-[64px] px-[20px] flex items-center justify-center w-full h-[100vh] bg-blackOpacity`}
    >
      <div className='max-w-[806px] h-full overflow-y-auto bg-white rounded-[15px] py-[80px] px-[20px]'>
        <h2 className='text-black text-center text-[40px] font-semibold'>
          Choice of figure
        </h2>
        <p className='text-black text-center text-[28px] font-bold'>
          Select your figure and click on it. You will have 10 seconds to make a
          decision. If you don't make a decision, a random number generator will
          make the choice for you. You will play the game if you lose points are
          not returned!
        </p>
        <div className='relative mt-[80px] pt-[80px] pb-[200px] px-[204px] max-w-[630px] m-auto'>
          <img
            src='/public/02.png'
            alt='img desc'
            className='w-[212px] h-[216px] m-auto'
          />
          <button
            className='absolute top-0 left-0'
            onClick={() => handleChose(0)}
          >
            <img
              src='/public/s-icon-big.jpg'
              alt='scissors'
              className='w-[190px] h-[190px]'
            />
            <div className='opacity-0 hover:opacity-100 ease-in duration-300 cursor-pointer flex items-center justify-center absolute top-0 left-0 w-full h-full rounded-full bg-blackOpacity'>
              <p className='text-[28px] font-medium'>
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
              src='/public/p-icon-big.jpg'
              alt='scissors'
              className='w-[190px] h-[190px]'
            />
            <div className='opacity-0 hover:opacity-100 ease-in duration-300 cursor-pointer flex items-center justify-center absolute top-0 left-0 w-full h-full rounded-full bg-blackOpacity'>
              <p className='text-[28px] font-medium'>
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
              src='/public/r-icon-big.jpg'
              alt='scissors'
              className='w-[190px] h-[190px]'
            />
            <div className='opacity-0 hover:opacity-100 ease-in duration-300 cursor-pointer flex items-center justify-center absolute top-0 left-0 w-full h-full rounded-full bg-blackOpacity'>
              <p className='text-[28px] font-medium'>
                Choose
                <br /> ME
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalChose;
