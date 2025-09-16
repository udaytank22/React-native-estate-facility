import React from 'react';
import Svg, { Defs, LinearGradient, Stop, Path } from 'react-native-svg';
import { moderateScale } from 'react-native-size-matters';

const GradientArrow = ({ size = moderateScale(24) }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0%" stopColor="#034175" />
          <Stop offset="60%" stopColor="#34B0F5" />
        </LinearGradient>
      </Defs>
      <Path
        d="M19 12H5M12 19l-7-7 7-7"
        stroke="url(#grad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default GradientArrow;
