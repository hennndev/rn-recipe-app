import React from 'react'
import { View, TouchableOpacity, Text, Image, ScrollView, Pressable } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../../types'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { dataRecipes } from '../../data/dataRecipe'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'RecipeDetail'>;

interface PropsTypes {
  route: ProfileScreenRouteProp;
}

const RecipeDetailScreen: React.FC<PropsTypes> = ({route}) => {
    const params = route.params
    const recipeId = params.id
    const recipe = dataRecipes.find(item => item.id === recipeId)
    const navigation = useNavigation()

    return (
        <SafeAreaProvider>
            <SafeAreaView className='px-6 pt-10 pb-5 bg-white'>
                <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
                    <View>
                        <View className='mb-5'>
                            <View className='flex-between flex-row mb-5'>
                                <TouchableOpacity className='w-10 absolute left-1 z-10' onPress={() => navigation.goBack()}>
                                    <Icon name='back' size={20} color='black'/>
                                </TouchableOpacity>
                                <Text className='font-psemibold text-center flex-1 text-xl'>{recipe?.name}</Text>
                            </View>
                            <Image source={recipe?.imagePath} className='w-full h-[300px] rounded-xl'/>
                        </View>
                        <View className='mb-5'>
                            <View className='mb-4'>
                                <Text className='font-pmedium'>Deskripsi:</Text>
                                <Text className='font-pregular text-gray-600'>{recipe?.description}</Text>
                            </View>
                            <View className='mb-4'>
                                <Text className='font-pmedium'>Estimasi:</Text>
                                <Text className='font-pregular text-gray-600'>{recipe?.duration}</Text>
                            </View>
                            <View className='mb-4'>
                                <Text className='font-pmedium'>Porsi:</Text>
                                <Text className='font-pregular text-gray-600'>{recipe?.persons}</Text>
                            </View>
                            <View className='mb-4'>
                                <Text className='font-pmedium mb-2'>Bahan:</Text>
                                <View className='flex flex-col gap-1'>
                                    {recipe?.ingredients.map(ingredient => (
                                        <Text key={ingredient} className='font-pregular text-gray-600'>- {ingredient}</Text>
                                    ))}
                                </View>
                            </View>
                            <View>
                                <Text className='font-pmedium mb-2'>Proses pembuatan:</Text>
                                <View className='flex flex-col gap-2'>
                                    {recipe?.instructions.map((instruction, index) => (
                                        <Text key={index} className='font-pregular text-gray-600'>- {instruction}</Text>
                                    ))}
                                </View>
                            </View>
                        </View>
                        <View className='flexx flex-row'>
                            <Pressable className='flexx flex-row border border-gray-300 rounded-xl px-4 py-2 mr-3'>
                                <View className='mr-2'>
                                    <Icon name="sharealt" size={16} color="gray" />
                                </View>
                                <Text className='font-pnormal text-lg text-gray-700'>Share</Text>
                            </Pressable>
                            <Pressable className='flexx flex-row border border-gray-300 rounded-xl px-4 py-2'>
                                <View className='mr-2'>
                                    <Icon name="hearto" size={16} color="gray" />
                                </View>
                                <Text className='font-pnormal text-lg text-gray-700'>Simpan</Text>
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default RecipeDetailScreen