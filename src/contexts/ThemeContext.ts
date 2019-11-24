import { createContext, Dispatch, SetStateAction } from 'react';

interface ThemeContext {
  color: 'dark' | 'light';
}

const ThemeContext = createContext<[ThemeContext, Dispatch<SetStateAction<ThemeContext>>]>([{ color: 'dark' }, theme => theme]);

export default ThemeContext;
