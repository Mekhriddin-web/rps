import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../lib/firebase';

const Header = () => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  return (
    <header className='header'>
      <div className='h-[calc(130/1512*100vw)] w-full flex items-center'>
        <div className='header__left p-[calc(4/1512*100vw)] flex items-center justify-center'>
          <Link to='/' className='header__link'>
            R.P.S BIZ
          </Link>
        </div>
        <div className='header__right p-[calc(4/1512*100vw)] flex items-center gap-[calc(10/1512*100vw)]'>
          <ul className='w-full flex items-center justify-center gap-[calc(60/1512*100vw)]'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/'>How to play</Link>
            </li>
          </ul>
          <div className='w-full flex items-center justify-end gap-[calc(8/1512*100vw)]'>
            <button
              className='flex items-center justify-center bg-purple w-[calc(130/1512*100vw)] h-[calc(50/1512*100vw)] p-[calc(2/1512*100vw)]'
              onClick={signOut}
            >
              Sing out
            </button>
            <p className='text-[calc(20/1512*100vw)]'>{user?.displayName}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
