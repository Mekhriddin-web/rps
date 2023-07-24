import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../lib/firebase';
import googleIcon from '/images/google.svg';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { Navigate } from 'react-router-dom';

const SingUp = () => {
  const [user] = useAuthState(auth);

  if (user) return <Navigate to='/' />;

  const singUpWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithRedirect(auth, provider);
  };

  return (
    <div className='auth'>
      <div className='auth__inner'>
        <h1 className='text-[68px] font-bebas text-center'>Welcome RPS GAME</h1>
        <p className='text-[20px] font-urbanist text-center'>
          Welcome to Math Lotto. World of wealth and entertainment
        </p>
        <form>
          <button
            type='button'
            className='p-[16px] gap-[13px] flex items-center justify-center w-full bg-white rounded-md border border-black text-black'
            onClick={singUpWithGoogle}
          >
            <img src={googleIcon} className='w-[20px] h-[20px]' alt='google' />
            <span>Continue With Google</span>
          </button>
          <p className='auth__text text-[16px] text-gray'>
            <span>Or</span>
          </p>
          <div className='mb-6'>
            <input
              type='text'
              id='name'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              placeholder='Name'
            />
          </div>
          <div className='mb-6'>
            <input
              type='email'
              id='email'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              placeholder='Email'
            />
          </div>
          <div className='mb-6'>
            <input
              type='password'
              id='password'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              placeholder='Password'
            />
          </div>
          <button
            type='submit'
            className='text-white bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[30px] text-sm w-full px-5 py-2.5 text-center'
          >
            Register
          </button>
        </form>
        <p className='mt-[40px] text-center'>
          Already have an account?
          <a href='#' className='ml-2 text-orange'>
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SingUp;
