import React from 'react'
import RecipeList from '../components/HomeScreen/RecipeList'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import HomeScreenHeader from '../components/HomeScreen/Header'
import HomeScreenSearch from '../components/HomeScreen/Search'

const HomeScreen = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView className='px-6 py-10 bg-white'>
                <HomeScreenHeader/>
                <HomeScreenSearch/>
                <RecipeList/>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default HomeScreen