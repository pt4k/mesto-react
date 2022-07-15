import { createContext } from 'react';

export const CurrentLoadingContext = createContext();

export const loading = {
  delete: {
    text: 'Удаление...',
  },
  save: {
    text: 'Сохранение...',
  },
};
