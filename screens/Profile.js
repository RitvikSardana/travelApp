import React from 'react'
import { View, Text,Button } from 'react-native'

export default function Profile({navigation}) {
    return (
        <View style = {{justifyContent:'center',alignItems:"center",flex:1}}>
            <Text>Profile</Text>
            {/* <Button title = "Details" onPress = {() => navigation.navigate('Details')} /> */}
            
        </View>
    )
}
