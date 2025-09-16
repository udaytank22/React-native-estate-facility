import {
  launchCamera as rnLaunchCamera,
  launchImageLibrary as rnLaunchImageLibrary,
  CameraOptions,
  ImageLibraryOptions,
  Asset,
  ImagePickerResponse,
} from 'react-native-image-picker';

// 🔹 Generic helper to handle response
const handleResponse = (
  response: ImagePickerResponse,
  resolve: (asset: Asset | null) => void,
  reject: (reason?: string) => void,
) => {
  if (response.didCancel) {
    resolve(null); // User cancelled
  } else if (response.errorCode) {
    reject(response.errorMessage ?? 'Unknown error');
  } else if (response.assets && response.assets[0]) {
    resolve(response.assets[0]);
  } else {
    reject('No asset found');
  }
};

// 🔹 Open Camera (Promise-based)
export const pickFromCamera = (options?: Partial<CameraOptions>) => {
  return new Promise<Asset | null>((resolve, reject) => {
    rnLaunchCamera(
      {
        mediaType: 'photo',
        maxWidth: 1200,
        maxHeight: 1450,
        saveToPhotos: true,
        ...options,
      },
      response => handleResponse(response, resolve, reject),
    );
  });
};

// 🔹 Open Gallery (Promise-based)
export const pickFromGallery = (options?: Partial<ImageLibraryOptions>) => {
  return new Promise<Asset | null>((resolve, reject) => {
    rnLaunchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: 1,
        ...options,
      },
      response => handleResponse(response, resolve, reject),
    );
  });
};
