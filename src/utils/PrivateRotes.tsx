import { Navigate, Outlet } from 'react-router-dom';
import { auth } from '../lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const PrivateRotes = () => {
  const [user] = useAuthState(auth);

  return user ? <Outlet /> : <Navigate to='/rps/singUp/' />;
};

export default PrivateRotes;
