import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Propety = () => {
    const { id } = useLocalSearchParams()
    return (
        <View>
            <Text>Propety {id}</Text>
        </View>
    )
}

export default Propety