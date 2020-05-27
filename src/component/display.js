import React from 'react'

import { View , Text, FlatList,Image , StyleSheet} from 'react-native'



const Display = ({data , title}) =>{

const list = (data) => {
    return(
        <View>
            <Image style = { { width :100, height : 100 , borderRadius : 10}}source = {{uri : data.imageLinks.smallThumbnail}}/>
            <Text style = {{ fontSize : 13 ,marginTop : 10 }}>{data.title}</Text>
        </View>
        )
    }

    return (
        <>
           <Text style = {styles.header}>{title}</Text>
            <FlatList data = {data}
            horizontal
            showsHorizontalScrollIndicator = {false}
            style = {styles.list}
            
                renderItem = {({item}) =>{ 
                    return <View style = {styles.item}>{list(item)}</View>
                }}
                keyExtractor = {(term) => term.id}
            />
        </>


    )




}
export default Display

const styles = StyleSheet.create({
    item :{
        
        
        width : 110,
        height : 160

    },
    header :{
        marginLeft : 30,
        marginTop :20,
        marginBottom : 30,
        fontSize : 19,
        fontStyle :"italic"
    },
    list :{
        marginLeft : 30
    }
})