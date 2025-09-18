import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Base sizes from iPhone X (375x812)
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

/**
 * Scale horizontally based on screen width
 */
export const scale = (size: number): number =>
  (width / guidelineBaseWidth) * size;

/**
 * Scale vertically based on screen height
 */
export const verticalScale = (size: number): number =>
  (height / guidelineBaseHeight) * size;

/**
 * Moderates the scale to reduce aggressive scaling
 * @param size - value to scale
 * @param factor - adjustment factor (default: 0.5)
 */
export const moderateScale = (size: number, factor = 0.5): number =>
  size + (scale(size) - size) * factor;
