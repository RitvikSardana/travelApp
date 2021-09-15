import React from 'react'
import { View, Text,StyleSheet,ImageBackground,Image,FlatList,TouchableOpacity } from 'react-native'
import discoverData from '../../assets/data/discoverData'
import colors from '../../assets/colors/colors'
import { MaterialIcons } from '@expo/vector-icons'

export default function Discover({navigation}) {
    
    //FUnction
    const renderDiscoverItem = ({ item }) => {
        return (
            <TouchableOpacity onPress = {() => navigation.navigate('Details',item)}>
                <ImageBackground
                    source = {item.image}
                    style = {[styles.discoverItem,{marginLeft:item.id === 'discover-1'? 20: 0}]}
                    imageStyle = {styles.discoverItemImage}
                >
                    <Text style = {styles.discoverItemTitle}>{item.title}</Text>
                    <View style = {styles.discoverItemLocationWrapper}>
                        <MaterialIcons name = "location-pin" size = {18} color = {colors.white} />
                        <Text style = {styles.discoverItemLocationText}>{item.location}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    }

    return (
        <View style = {styles.discoverWrapper}>
            <Text style = {styles.discoverTitle}>Discover</Text>
            <View style = {styles.discoverCategories}>
                <Text style = {{...styles.discoverCategoriesTitle,...styles.discoverCategoriesTitle_1}}>
                    All
                </Text>
                <Text style = {styles.discoverCategoriesTitle}>
                    Destinations
                </Text>
                <Text style = {styles.discoverCategoriesTitle}>
                    Cities
                </Text>
                <Text style = {styles.discoverCategoriesTitle}>
                    Experiences
                </Text>
            </View>
            <View style = {styles.discoverItemsWrapper}>
                <FlatList 
                    data = {discoverData}
                    renderItem = {renderDiscoverItem} 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
    </View>
    )
}

const styles = StyleSheet.create({
    discoverWrapper:{

    },
    discoverTitle:{
        marginHorizontal:20,
        fontSize:32,
        marginBottom:15,
        fontFamily:'Lato_700Bold'
    },
    discoverCategories:{
        marginHorizontal:20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    discoverCategoriesTitle:{
        fontFamily:'Lato_400Regular',
        color: colors.gray,
        fontSize:16
    },
    discoverCategoriesTitle_1 :{
        color: colors.orange
    },
    discoverItemsWrapper:{
        marginTop:20,
        alignItems:'center',
        paddingVertical:20
    },
    discoverItem:{
        width:170,
        height:250,
        justifyContent:'flex-end',
        alignItems:'center',
        paddingHorizontal:10,
        paddingVertical:15,
        marginRight:20
    },
    discoverItemImage:{
        borderRadius:20
    },
    discoverItemTitle:{
        fontFamily:'Lato_700Bold',
        color:colors.white,
        fontSize:20,
        textAlign:'center'
    },
    discoverItemLocationWrapper:{
        flexDirection:'row',
        marginTop:10,

    },
    discoverItemLocationText:{
        marginLeft:5,
        color:colors.white,
        fontFamily:'Lato_700Bold',

    },


})