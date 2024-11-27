import React from 'react'
import Recipe from './Recipe'
import { ScrollView, View, Text, FlatList } from 'react-native'
import { dataRecipes } from '../../../data/dataRecipe'

const RecipeList = () => {
    return (
        <ScrollView className='mt-10' showsVerticalScrollIndicator={false} bounces={false}>
            <View className='pb-44'>
                <Text className='font-pregular text-xl mb-8'>Resep Populer</Text>
                <View className='flex flex-col gap-10'>
                    {dataRecipes.map((obj: RecipeTypes) => (
                        <Recipe key={obj.id} data={obj}/>
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}

export default RecipeList