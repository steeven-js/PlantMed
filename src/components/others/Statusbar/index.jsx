import {useContext} from 'react';
import {View, StatusBar} from 'react-native';
import {getModel} from 'react-native-device-info';
import {ThemeContext} from '../../../theming/contexts/ThemeContext';
import {statusBarHeight} from '../../../statelessFunctions/statusBarHeightFunction';

// Functional component
const Statusbar = ({...props}) => {
  // Using context
  const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
  const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <View
      style={[
        {height: statusBarHeight(getModel()), backgroundColor: theme.accent},
      ]}>
      <StatusBar translucent backgroundColor={theme.accent} {...props} />
    </View>
  );
};

// Exporting
export default Statusbar;
