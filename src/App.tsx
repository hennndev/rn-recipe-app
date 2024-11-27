import '../global'
import * as React from 'react'
import { Text } from 'react-native'
import { useFonts } from 'expo-font'
import HomeStack from './stacks/HomeStack'
import ProfileStack from './stacks/ProfileStack'
import FavoriteStack from './stacks/FavoriteStack'
import Icon from 'react-native-vector-icons/AntDesign'
import { NavigationContainer } from '@react-navigation/native'
import { Poppins_200ExtraLight, Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold, Poppins_900Black } from '@expo-google-fonts/poppins'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import 'react-native-gesture-handler'

const Tab = createBottomTabNavigator()

function RootStack() {
    return (
        <Tab.Navigator screenOptions={{
            animation: 'shift',
            tabBarStyle: {
                height: 68,
                paddingTop: 5
            },
        }}>
            <Tab.Screen name="Favorite" component={FavoriteStack} options={{
                headerShown: false,
                tabBarIcon: () => {
                    return <Icon name='hearto' size={20} color='gray' />
                },  
                tabBarActiveTintColor: 'tomato',
                tabBarLabelStyle: {
                    fontSize: 14,
                    color: 'gray',
                    fontFamily: 'poppins400'
                }
            }}/>
            <Tab.Screen name="Home" component={HomeStack} options={{
                headerShown: false,
                tabBarIcon: () => {
                    return <Icon name='home' size={20} color='gray' />
                },
                tabBarActiveTintColor: 'tomato',
                tabBarLabelStyle: {
                    fontSize: 14,
                    color: 'gray',
                    fontFamily: 'poppins400'
                }
            }}/>
            <Tab.Screen name="Profile" component={ProfileStack} options={{
                headerShown: false,
                tabBarIcon: () => {
                    return <Icon name='user' size={20} color='gray' />
                },
                tabBarActiveTintColor: 'tomato',
                tabBarLabelStyle: {
                    fontSize: 14,
                    color: 'gray',
                    fontFamily: 'poppins400'
                }
            }}/>
        </Tab.Navigator>
    )
}

export default function App() {
    let [fontsLoaded, fontsError] = useFonts({
        poppins200: Poppins_200ExtraLight,
        poppins300: Poppins_300Light, 
        poppins400: Poppins_400Regular, 
        poppins500: Poppins_500Medium,
        poppins600: Poppins_600SemiBold,
        poppins700: Poppins_700Bold,
        poppins800: Poppins_800ExtraBold,
        poppins900: Poppins_900Black,
    })

    if (!fontsLoaded) {
        return <Text>Loading fonts...</Text>;
    }

    return (
        <NavigationContainer>
            <RootStack/>
        </NavigationContainer>
    )
}