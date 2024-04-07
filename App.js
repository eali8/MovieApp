// app.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './Screens/SplashScreen';
import WelcomeScreen from './Screens/WelcomeScreen';
import FeelingsScreen from './Screens/FeelingsScreen';
import SadScreen from './Screens/SadScreen';
import BordScreen from './Screens/BordScreen';
import HappyScreen from './Screens/HappyScreen';
import RelaxScreen from './Screens/RelaxScreen';
import CheersScreen from './Screens/CheersScreen';
import CategoriesScreen from './Screens/CategoriesScreen';
import MovieScreen from './Screens/MovieScreen';

import { useFonts} from 'expo-font'; 
import { Bevan_400Regular, Bevan_400Regular_Italic } from '@expo-google-fonts/bevan'; 

import MyListItem from './components/MyListItem';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ActivityIndicator } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Feelings"
          component={FeelingsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sad"
          component={SadScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Bord"
          component={BordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Happy"
          component={HappyScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Relax"
          component={RelaxScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cheers"
          component={CheersScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Movie"
          component={MovieScreen}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
};
