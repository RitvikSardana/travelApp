import React from 'react'
import { View, Text,StyleSheet,FlatList, Image } from 'react-native'
import activitiesData from '../../assets/data/activitiesData'
import colors from '../../assets/colors/colors'
export default function Activities() {


    const renderActivitiesItem = ({ item }) => {
        return (
            <View style = {styles.activitiesItemWrapper}>
                <Image source = {item.image} style = {styles.activitiesItemImage} />
                <Text style = {styles.activitiesItemText}>{item.title}</Text>
            </View>
        )
    }

    return (
        <View style = {styles.activitiesWrapper}>
            <Text style = {styles.activitiesTitle}>Activities</Text>
            <View style = {styles.activitiesItemsWrapper}>
                <FlatList 
                    data = {activitiesData}
                    renderItem = {renderActivitiesItem} 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    activitiesWrapper:{
        marginHorizontal:20
    },  
    activitiesTitle:{
        fontSize:32,
        marginBottom:15,
        fontFamily:'Lato_700Bold',
        color:colors.black
    },
    activitiesItemWrapper:{
        justifyContent:'space-between',
        alignItems:'center',
        marginRight:30,
        marginTop:5,
        marginBottom:10,
    },
    activitiesItemImage:{
        width:36,
    },
    activitiesItemText:{
        fontFamily:'Lato_400Regular',
        fontSize:14,
        color:colors.gray
    },
})
