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
    <div className='pt-[calc(20/1512*100vw)] pb-[calc(50/1512*100vw)] bg-neutralBlack'>
      <div className='container mx-auto px-[calc(4/1512*100vw)]'>
        <Timer seconds={seconds} setSeconds={setSeconds} />
        <div className='flex'>
          <User user={user} />
          <div className='my-[calc(10/1512*100vw)] relative flex items-center justify-center m-auto rounded-full bg-gray w-[calc(600/1512*100vw)] h-[calc(600/1512*100vw)]'>
            <img
              src='images/02.png'
              alt='img desc'
              className='w-[calc(384/1512*100vw)] h-[calc(392/1512*100vw)]'
            />
            {!user.ready && (
              <button
                className='button-flash absolute top-[50%] left-0 translate-y-[-50%] flex items-center justify-center w-full bg-purple text-[calc(92/1512*100vw)] font-semibold'
                onClick={() => readyStart(true)}
              >
                Ready
              </button>
            )}
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
