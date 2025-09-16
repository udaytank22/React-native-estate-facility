import {
  CompositeNavigationProp,
  CompositeScreenProps,
  RouteProp,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {
  BottomTabNavigationProp,
  BottomTabScreenProps as RNBottomTabScreenProps,
} from '@react-navigation/bottom-tabs';

export type AuthStackParamList = {
  OnGoing: undefined;
  Login: undefined;
  LoginWithMobile: undefined;
  RegisterUser: undefined;
  OtpVerify: undefined;
  ResetPassword: undefined;
  AddSociety: undefined;
};

export type AppStackParamList = {
  bottomBar: NavigatorScreenParams<BottomTabParamList>;
  preApproved: undefined;
  SocietyList: undefined;
  PreCabBook: undefined;
  GateUpdate: undefined;
  Bill: undefined;
  VisitPass: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Society: undefined;
  Timeline: undefined;
  People: undefined;
  Profile: undefined;
};

export type RootNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabParamList>,
  NativeStackNavigationProp<AppStackParamList>
>;

// Props for Screens with Navigation & Route
export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;
export type AppStackScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;

export type BottomTabScreenProps<T extends keyof BottomTabParamList> =
  RNBottomTabScreenProps<BottomTabParamList, T>;

// Route Props (If you only need route, without navigation)
export type AuthStackRouteProp<T extends keyof AuthStackParamList> = RouteProp<
  AuthStackParamList,
  T
>;
export type AppStackRouteProp<T extends keyof AppStackParamList> = RouteProp<
  AppStackParamList,
  T
>;

export type ProfileScreenProps = CompositeScreenProps<
  RNBottomTabScreenProps<BottomTabParamList, 'Profile'>,
  NativeStackScreenProps<AppStackParamList>
>;
