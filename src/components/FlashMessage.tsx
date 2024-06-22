import React from 'react';
import FlashMessageLib from 'react-native-flash-message';

import {utils} from '../utils';

const FlashMessage: React.FC = () => {
  const height = utils.statusBarHeight();

  return (
    <FlashMessageLib
      position='top'
      statusBarHeight={height}
      renderBeforeContent={() => null}
    />
  );
};

export default FlashMessage;
