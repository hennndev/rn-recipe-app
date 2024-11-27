import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const ProfileStack = () => {
    return (
        <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{
                animation: "ios_from_left",
                headerShown: false
            }}>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    )
}

export default ProfileStack