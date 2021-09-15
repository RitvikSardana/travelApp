import React from 'react'
import { View, Text, FlatList, Image,StyleSheet,ImageBackground } from 'react-native'
import learnMoreData from '../../assets/data/learnMoreData'
import colors from '../../assets/colors/colors'

export default function LearnMore() {

    const renderLearnMoreItem = ({item}) => {
        return (
                <ImageBackground
                    source = {item.image}
                    style = {styles.LearnMoreItem}
                    imageStyle = {styles.LearnMoreItemImage}
                >
                    <Text style = {styles.LearnMoreItemText}>{item.title}</Text>
                </ImageBackground>
        )
    }


    return (
        <View style = {styles.LearnMoreWrapper}>
            <Text style = {styles.LearnMoreTitle}>Learn More</Text>
            <FlatList 
                data = {learnMoreData}
                renderItem = {renderLearnMoreItem} 
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    LearnMoreWrapper:{
        marginLeft:20,
    },
    LearnMoreTitle:{
        fontFamily:'Lato_700Bold',
        fontSize:32,
        marginBottom:15
    },
    LearnMoreItem:{
        marginRight:30,
        width:170,
        height:200,
        justifyContent:'flex-end',
    },
    LearnMoreItemImage:{
        borderRadius:20
    },
    LearnMoreItemText:{
        color:colors.white,
        textAlign:'center',
        fontFamily:'Lato_700Bold',
        fontSize:18,
        marginBottom:20
    },
})