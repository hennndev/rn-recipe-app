import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { View, Image, Text, Pressable } from 'react-native'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { RootStackParamList } from '../../../types'

type PropsTypes = {
    data: RecipeTypes
}

type RecipeDetailScreenNavigationProp = NavigationProp<RootStackParamList, 'RecipeDetail'>;


const Recipe = ({data}: PropsTypes) => {
    const navigation = useNavigation<RecipeDetailScreenNavigationProp>()
    return (
        <View className='flexx flex-row h-[160px] rounded-2xl'>
            <View className='flex-[0.4] h-full mr-3'>
                <Image source={data.imagePath} className='w-full h-full object-contain rounded-2xl'/>
            </View>
            <View className='flex-[0.6]'>
                <Text className='font-pmedium text-lg mb-1'>{data.name}</Text>
                <Text className='font-pnormal text-gray-500 leading-[20px] mb-3'>
                    {data.description}
                </Text>
                <View className='flexx gap-5'>
                    <View className='flexx'>
                        <View className='mr-2'>
                            <Icon name="clockcircleo" size={16} color="gray" />
                        </View>
                        <Text className='font-pnormal text-sm text-gray-500'>{data.duration}</Text>
                    </View>
                    <View className='flexx'>
                        <View className='mr-2'>
                            <Icon name="user" size={16} color="gray" />
                        </View>
                        <Text className='font-pnormal text-sm text-gray-500'>{data.persons}</Text>
                    </View>
                </View>
                <View className='mt-2 flex-between flex-row'>
                    <View className='flexx gap-2'>
                        <View className='mr-2'>
                            <Icon name="sharealt" size={20} color="#222" />
                        </View>
                        <View>
                            <Icon name="hearto" size={20} color="#222" />
                        </View>
                    </View>
                    <Pressable 
                        className='mt-2 w-24 bg-orange-600 p-2 rounded-2xl' 
                        onPress={() => navigation.navigate("RecipeDetail", {id: data.id})}>
                        <Text className='text-white font-pmedium text-center'>Detail</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default Recipe