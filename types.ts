import { ParamListBase } from '@react-navigation/core'; // Import ParamListBase

export type RootStackParamList = {
  Home: undefined; // Home screen doesn't require any params
  RecipeDetail: { id: number }; // Profile screen expects a 'userId' parameter
} & ParamListBase; // Extends ParamListBase