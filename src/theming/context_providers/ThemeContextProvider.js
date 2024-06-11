// Importing
import React, {useState} from 'react';
import {LightThemeColors, DarkThemeColors} from '../../config/Colors';
import {ThemeContext} from '../contexts/ThemeContext';

// Exporting context provider to provide it's values & methods globally
export const ThemeContextProvider = ({children}) => {
  // Local state
  const [theme, setTheme] = useState({
    lightTheme: {
      primary: LightThemeColors.primary,
      secondary: LightThemeColors.secondary,
      secondaryDark: LightThemeColors.secondaryDark,
      accent: LightThemeColors.accent,
      accentLightest: LightThemeColors.accentLightest,
      textHighContrast: LightThemeColors.textHighContrast,
      textLowContrast: LightThemeColors.textLowContrast,
    },
    darkTheme: {
      primary: DarkThemeColors.primary,
      secondary: DarkThemeColors.secondary,
      secondaryDark: DarkThemeColors.secondaryDark,
      accent: DarkThemeColors.accent,
      accentLightest: LightThemeColors.accentLightest,
      textHighContrast: DarkThemeColors.textHighContrast,
      textLowContrast: DarkThemeColors.textLowContrast,
    },
    isLightTheme: true,
  });

  // Toggling theme mode(Light/Dark)
  const _toggleTheme = () => {
    // Updating local state
    setTheme({
      ...theme,
      isLightTheme: !theme.isLightTheme,
    });
  };

  // Returning context provider
  return (
    <ThemeContext.Provider value={{...theme, _toggleTheme: _toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
