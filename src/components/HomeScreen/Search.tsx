import React from 'react'
import { View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

const Search = () => {
    return (
        <View className='flexx mt-8'>
            <TextInput placeholder='Cari resep makanan...' className='bg-gray-200 p-4 rounded-xl font-pregular flex-1 mr-3'/>
            <View className='bg-orange-600 rounded-xl p-4'>
                <Icon name='search1' size={20} color="white" />
            </View>
        </View>
    )
}

export default Search