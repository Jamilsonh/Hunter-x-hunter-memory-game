import { Route, Routes } from 'react-router-dom';
import Home from '../screens/Home';
import Game from '../screens/Game';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Home />} />
      <Route path='game' element={<Game />} />
    </Routes>
  );
}
