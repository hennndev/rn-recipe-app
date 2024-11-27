import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import { RootStackParamList } from '../../types'
import RecipeDetailScreen from '../screens/RecipeDetailScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

const Stack = createNativeStackNavigator<RootStackParamList>()

const HomeStack = () => {
    const navigation = useNavigation()

    return (
        <Stack.Navigator 
            screenOptions={{
                animation: "ios_from_left",
                headerShown: false
            }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen}/>
        </Stack.Navigator>
    )
}

export default HomeStack