import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../lib/firebase';

const Header = () => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  console.log(user);

  return (
    <header className='header'>
      <div className='h-[130px] w-full flex items-center'>
        <div className='header__left p-4 flex items-center justify-center'>
          <Link to='/rps/' className='header__link'>
            R.P.S BIZ
          </Link>
        </div>
        <div className='header__right p-4 flex items-center gap-[10px]'>
          <ul className='w-full flex items-center justify-center gap-[60px]'>
            <li>
              <Link to='/rps/'>Home</Link>
            </li>
            <li>
              <Link to='/rps/'>How to play</Link>
            </li>
          </ul>
          <div className='w-full flex items-center justify-end gap-[8px]'>
            <button
              className='flex items-center justify-center bg-purple w-[130px] h-[50px] p-2'
              onClick={signOut}
            >
              Sing out
            </button>
            <p className='text-[20px]'>{user?.displayName}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
