import React from 'react'
import { View, Text, Image } from 'react-native'

const Header = () => {
    return (
        <View className='flex justify-between flex-row'>
            <View className='flex flex-col mr-5'>
                <Text className='text-2xl font-pbold'>Hello, Hendra!</Text>
                <Text className='font-pregular text-gray-500 max-w-[250px] mt-1'>
                    Resep apa yang ingin kamu cari hari ini?
                </Text>
            </View>
            <View className='w-20 h-20'>
                <Image source={require('../../../assets/avatar1.png')} className='w-full h-full'/>
            </View>
        </View>
    )
}

export default Header