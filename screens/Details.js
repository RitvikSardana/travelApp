import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react'
import { View, Text,StyleSheet, ImageBackground, Dimensions, TouchableOpacity, Button } from 'react-native'
import colors from '../assets/colors/colors';

const height = Dimensions.get("window").height

export default function Details({route,navigation}) {

    const item = route.params;
    
    const [heartIcon,setHeartIcon] = useState(false)

    return (
        <View style = {styles.container}>
            <ImageBackground 
                source = {item.imageBig}
                style = {styles.backgroundImage}
                imageStyle = {styles.detailsImg}
            >
                <TouchableOpacity style = {styles.backIcon} onPress={()=>navigation.goBack()}>
                    <MaterialIcons name = "chevron-left" size = {38}  color = {colors.white}/>
                </TouchableOpacity>
                <View style = {styles.imageDetails}>
                    <Text style = {styles.imageDetailsTitle}>{item.title}</Text>
                    <View style = {styles.locationWrapper}>
                        <MaterialIcons name = "location-pin" color = {colors.white} size = {28} />
                        <Text style = {styles.locationText}>{item.location}</Text>
                    </View>
                </View>
            </ImageBackground>
            <View style = {styles.detailsWrapper}>
                <View style = {styles.heartWrapper}>
                    <MaterialIcons 
                        name = { heartIcon ? "favorite":"favorite-outline"} 
                        size = {32}  color = {colors.orange} 
                        onPress = {() => setHeartIcon(!heartIcon)}
                    />
                </View>
                <View style = {styles.detailsTextWrapper}>
                    <Text style = {styles.detailsTitle}>Description</Text>
                    <Text style = {styles.detailsText}>{item.description}</Text>
                </View>
                <View style = {styles.infoWrapper}>
                    <View style = {styles.infoItem}>
                        <Text style = {styles.infoTitle}>PRICE</Text>
                        <View style = {styles.infoPriceWrapper}>
                            <Text style = {styles.infoPrice} >{item.price}</Text>
                            <Text style = {styles.infoPriceText} >/person</Text>
                        </View>
                    </View>
                    <View style = {styles.infoItem}>
                        <Text style = {styles.infoTitle}>RATING</Text>
                        <View style = {styles.infoPriceWrapper}>
                            <Text style = {styles.infoPrice} >{item.rating}</Text>
                            <Text style = {styles.infoPriceText} >/5</Text>
                        </View>
                    </View>
                    <View style = {styles.infoItem}>
                        <Text style = {styles.infoTitle}>DURATION</Text>
                        <View style = {styles.infoPriceWrapper}>
                            <Text style = {styles.infoPrice} >{item.duration}</Text>
                            <Text style = {styles.infoPriceText} > Hours</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity 
                    style = {styles.buttonWrapper}
                    onPress = {() => alert("You Booked A Trip!!")}
                >
                    <Text style = {styles.buttontext}>Book Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white
    },
    backIcon:{
        marginTop:40,
        marginLeft:10
    },
    backgroundImage:{
        width:'100%',
        height:height*0.6,
        justifyContent:'space-between'
    },

    imageDetails:{
        marginBottom:25,
        marginLeft:10,
    },
    imageDetailsTitle:{
        fontFamily:'Lato_700Bold',
        color:colors.white,
        fontSize:34,
        marginHorizontal:10
    },
    locationWrapper:{
        flexDirection:'row',
        marginTop:20,
        marginBottom:10,
        alignItems:'center'
    },
    locationText:{
        marginLeft:5,
        color:colors.white
    },

    detailsWrapper:{
        flex:1,
        backgroundColor:colors.white,
        marginTop:-20,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    },
    heartWrapper:{
        position:'absolute',
        left:'80%',
        top:'-7%',
        borderWidth:1,
        borderColor:colors.white,
        backgroundColor:colors.white,
        padding:10,
        borderRadius:99,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
    },
    detailsTextWrapper:{

    },
    detailsTitle:{
        margin:20,
        fontFamily:'Lato_700Bold',
        fontSize:32
    },
    detailsText:{
        marginHorizontal:20,
        color:colors.darkGray,
        fontFamily:'Lato_400Regular',
        fontSize:16,
        height:90
    },
    infoWrapper:{
        marginHorizontal:20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    infoItem:{
        marginTop:20
    },
    infoTitle:{
        fontFamily:'Lato_400Regular',
        color:colors.gray,
        marginBottom:5,
        fontSize:16
    },
    infoPriceWrapper:{
        flexDirection:'row',
        alignItems:'center'
    },
    infoPrice:{
        fontFamily:'Lato_700Bold',
        color:colors.orange,
        fontSize:25
    },
    infoPriceText:{
        color:colors.gray,
        fontSize:18
    },
    buttonWrapper:{
        margin:20,
        marginTop:30,
        backgroundColor:colors.orange,
        padding:16,
        borderRadius:20,
    },
    buttontext:{
        textAlign:'center',
        color:colors.white,
        fontSize:18,
        fontFamily:'Lato_700Bold'
    },


})
