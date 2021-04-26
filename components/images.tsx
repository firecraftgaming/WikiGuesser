import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Next() {
  return (
    <Svg width={72} height={51} viewBox="0 0 48 34">
        <Path stroke="#626262" strokeWidth={4} d="M45 17L30 32m15-15L30 2m15 15H0" strokeLinecap="round"></Path>
    </Svg>
  );
}

export { Next };