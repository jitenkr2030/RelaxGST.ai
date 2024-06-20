import { useContext } from 'react';
import { BookkeepingContext } from '../context/BookkeepingContext';

const useBookkeeping = () => {
  return useContext(BookkeepingContext);
};

export default useBookkeeping;
