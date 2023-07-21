import { useAuthState } from 'react-firebase-hooks/auth';
import Header from './components/Header';
import SingUp from './layouts/Auth/SingUp';
import Home from './layouts/Home';
import { Route, Routes } from 'react-router-dom';
import PrivateRotes from './utils/PrivateRotes';
import { auth } from './lib/firebase';
import Game from './layouts/Game';
import Preloader from './components/Preloader';

export function App() {
  const [, loading] = useAuthState(auth);

  if (loading) return <Preloader />;

  return (
    <div className='wrapper'>
      <Header />
      <div className='app'>
        <Routes>
          <Route element={<PrivateRotes />}>
            <Route path='/' element={<Home />} />
            <Route path='/game' element={<Game />} />
          </Route>
          <Route path='/singUp' element={<SingUp />} />
        </Routes>
      </div>
    </div>
  );
}
