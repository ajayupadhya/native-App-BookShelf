import React from 'react'
import { View , StyleSheet ,Text, FlatList ,Image}  from 'react-native'
import Display from './display'

const Shelf = ({allBook}) =>{

    const currentReading = allBook.filter((book) => book.shelf === "currentlyReading")
    const wantToRead = allBook.filter((book) => book.shelf === "wantToRead")
    const read = allBook.filter((book) => book.shelf === "read")

    return(
        <>
        <Display data = {currentReading} title = {"Currently Reading"}/>
        <Display data = {wantToRead} title = {"Want To Read"}/>
        <Display data = {read} title = {"Read"}/>
        </>

    )


}
const styles = StyleSheet.create({})

export default Shelf