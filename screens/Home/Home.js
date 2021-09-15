import React from 'react'
import { View, Text, Button,StyleSheet, ScrollView, SafeAreaView, Image, ImageBackground } from 'react-native'
import { Feather, MaterialIcons } from '@expo/vector-icons'
import colors from '../../assets/colors/colors'
import Discover from './Discover'
import Activities from './Activities'

import profile from '../../assets/images/person.png'
import LearnMore from './LearnMore'
// Feather.loadFont()

export default function Home({navigation}) {

    return (
        <View style = {styles.container}>
            <ScrollView>
                {/* Header */}
                <SafeAreaView>
                    <View style = {styles.headerWrapper}>
                        <Feather
                            name = "menu"
                            size = {32}
                            style = {styles.menuIcon}
                            color = {colors.black}
                        />
                        <Image source ={profile} style = {styles.profileImage}/>
                    </View>
                </SafeAreaView>
                {/* Discover */}
                <Discover navigation = { navigation} /> 
                {/* navigation as prop as we are in the same page */}
                {/* Activities */}
                <Activities />
                {/* LearnMore */}
                <LearnMore />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        color:colors.white,
    },
    headerWrapper:{
        marginHorizontal:20,
        marginTop:35,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    menuIcon:{

    },
    profileImage:{
        borderRadius:10,
        height:52,
        width:52
    },
})
