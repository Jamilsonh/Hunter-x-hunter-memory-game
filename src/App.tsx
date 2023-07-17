/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { DifficultyProvider } from './utils/DifficultyContext';
import { Router } from './utils/router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <DifficultyProvider>
        <Router />
      </DifficultyProvider>
    </BrowserRouter>
  );
}

export default App;
