import { useState } from 'preact/hooks';
import Timer from '../../components/Timer';
import ModalChose from '../../components/ModalChose';
import User from '../../components/User';
import useUsersStore from '../../store';
import ModalResult from '../../components/ModalResult';
import { Navigate } from 'react-router-dom';

const Game = () => {
  const { user, bot, readyStart, choseUserFigure, choseBotFigure } =
    useUsersStore(state => state);

  const [seconds, setSeconds] = useState(12);

  const [isModalChoseOpen, setIsModalChoseOpen] = useState(false);
  const [isModalResultOpen, setIsModalResultOpen] = useState({
    open: false,
    result: '',
  });

  const userChoice = user.figure;
  const computerChoice = bot.figure;

  if (user.ready && seconds === 0 && user.figure === null) {
    setSeconds(10);
    setIsModalChoseOpen(true);
  }

  if (user.ready && user.figure !== null && seconds === 0) {
    switch (userChoice + '' + computerChoice) {
      case '01':
      case '20':
      case '12':
        setIsModalResultOpen({ open: true, result: 'win' });
        break;
      case '10':
      case '02':
      case '21':
        setIsModalResultOpen({ open: true, result: 'lose' });
        break;
      case '22':
      case '11':
      case '00':
        setIsModalResultOpen({ open: true, result: 'draw' });
        break;
    }
    readyStart(false);
    setSeconds(12);
    choseUserFigure(null);
    choseBotFigure(null);
  }

  if (!user.ready && seconds === 0) return <Navigate to='/' />;

  return (
    <div className='pt-[260px] pb-[202px] bg-neutralBlack'>
      <div className='container mx-auto px-4'>
        <Timer seconds={seconds} setSeconds={setSeconds} />
        <p className='text-center mb-10'>
          At the top you see the time until the end of the recruitment of
          players, have time to hit the "Ready" button to take part in the game.
          If you pressed the "Ready" button - After the end of the time, a
          window for selecting a figure (stone, scissors, paper) will open.
          Successful game to you! There will be one winner!
        </p>
        <div className='flex'>
          <User user={user} />
          <div className='my-10 relative flex items-center justify-center m-auto rounded-full bg-gray w-[700px] h-[700px]'>
            <img
              src='images/02.png'
              alt='img desc'
              className='w-[484px] h-[492px]'
            />
            <button
              className='absolute top-[50%] left-0 translate-y-[-50%] flex items-center justify-center w-full bg-purple text-[92px] font-semibold'
              onClick={() => readyStart(true)}
            >
              Ready
            </button>
          </div>
          <User user={bot} />
        </div>
      </div>
      <ModalChose isOpen={isModalChoseOpen} closeModal={setIsModalChoseOpen} />
      <ModalResult
        isOpen={isModalResultOpen.open}
        result={isModalResultOpen.result}
        closeModal={setIsModalResultOpen}
      />
    </div>
  );
};

export default Game;
