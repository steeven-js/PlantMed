import {useCallback} from 'react';

export const handleTextChange = (
  setter: React.Dispatch<React.SetStateAction<string>>,
) =>
  useCallback((text: string): void => {
    setter(text);
  }, []);

export const handlePromocodeChange = (
  setter: React.Dispatch<React.SetStateAction<number>>,
) =>
  useCallback((text: number): void => {
    setter(text);
  }, []);
