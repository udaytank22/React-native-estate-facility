import * as ImagePicker from 'react-native-image-picker';
export const openCamera = async (
  mediaType = 'photo',
  maxWidth = 1200,
  maxHeight = 1450,
  onLoading = () => {},
  onSuccess = () => {},
  onError = () => {},
  onCancel = () => {},
  onCustomButton = () => {},
) => {
  console.log('Opening camera...');
  onLoading(true);

  const options = {
    mediaType,
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
    maxWidth,
    maxHeight,
  };

  ImagePicker.launchCamera(options, response => {
    onLoading(false);

    if (response.didCancel) {
      console.log('User cancelled image picker');
      onCancel();
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
      onError(response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
      onCustomButton(response.customButton);
    } else {
      // console.log('Response', response);
      onSuccess(response.assets[0]);
    }
  });
};

export const launchImageLibrary = async ({
  mediaType = 'photo',
  onLoading = () => {},
  onSuccess = () => {},
  onError = () => {},
  onCancel = () => {},
}) => {
  console.log('Opening image library...');
  onLoading(true);

  const options = {
    mediaType,
    storageOptions: {
      skipBackup: true,
      path: 'media',
    },
  };

  ImagePicker.launchImageLibrary(options, response => {
    onLoading(false);

    if (response.didCancel) {
      console.log('User cancelled image picker');
      onCancel();
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
      onError(response.error);
    } else {
      onSuccess(response.assets[0]);
    }
  });
};
