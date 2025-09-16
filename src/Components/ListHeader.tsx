import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // or any other icon set you use
import FontAwesome6 from 'react-native-vector-icons/FontAwesome5';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import GradientArrow from './GradientLeftArrow';

import More from '../Assets/Image/Icons/More.svg';
import Add from '../Assets/Image/Icons/Plus.svg';
import BackArrow from '../Assets/Image/Icons/BackArrow.svg';

type ListHeaderProps = {
  title: string;
  onBackPress: () => void;
  onAddPress?: () => void;
  isExtraOptionVisible?: boolean;
  isMoreVisible?: boolean;
};

const ListHeader: React.FC<ListHeaderProps> = ({
  title,
  onBackPress,
  onAddPress,
  isExtraOptionVisible,
  isMoreVisible,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress} style={styles.iconContainer}>
        <BackArrow height={24} width={24} />
        {/* <Icon name="arrow-back" size={moderateScale(24)} color="#000" /> */}
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <View style={{ gap: 15, flexDirection: 'row' }}>
        {isMoreVisible && (
          <TouchableOpacity onPress={onAddPress} style={styles.iconContainer}>
            <Add height={24} width={24} />
          </TouchableOpacity>
        )}
        {isExtraOptionVisible ? (
          <TouchableOpacity style={styles.iconContainer}>
            <More height={24} width={24} />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default ListHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: verticalScale(56),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(15),
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  iconContainer: {
    // paddingHorizontal: scale(12),
  },
  title: {
    paddingLeft: scale(10),
    fontFamily: 'Inter-SemiBold',
    fontSize: scale(18),
    fontWeight: '600',
    color: '#000',
    flex: 1,
  },
});
