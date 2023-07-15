import { createContext, useState, ReactNode } from 'react';

interface DifficultyContextType {
  difficulty: number;
  changeDifficulty: (newDifficulty: number) => void;
}

export const DifficultyContext = createContext<DifficultyContextType>({
  difficulty: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  changeDifficulty: () => {},
});

interface DifficultyProviderProps {
  children: ReactNode;
}

export const DifficultyProvider = ({ children }: DifficultyProviderProps) => {
  const [difficulty, setDifficulty] = useState(0);

  const changeDifficulty = (newDifficulty: number) => {
    setDifficulty(newDifficulty);
  };

  return (
    <DifficultyContext.Provider value={{ difficulty, changeDifficulty }}>
      {children}
    </DifficultyContext.Provider>
  );
};
