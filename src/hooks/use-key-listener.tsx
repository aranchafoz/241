import { useEffect, useCallback } from 'react';

export const KEY_NUMBER = {
  escape: 27,
};

const useKeyListener = (key: number, callback: any) => {

  const handleKeyDown = useCallback((event) => {
    if (event.keyCode === key) {
      callback();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false);
    return () => {
      document.removeEventListener('keydown', handleKeyDown, false);
    };
  });
};

export default useKeyListener;
