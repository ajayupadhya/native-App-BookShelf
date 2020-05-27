import React  from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";

const SearchBar = ({SearchItem , change, endWrite}) => {
  return (
    <View >
     <TextInput
       style = {styles.input}
       onChangeText = {change }
       value = {SearchItem}
       onEndEditing = {endWrite}
     />
     <Image style = {styles.image} source = {require("../../assets/logo-finder-symbol-png-1.png")}/>
    </View>
  );
};

const styles = StyleSheet.create({
  
  input: {
    paddingLeft: 50,
    fontSize: 20,
    marginHorizontal: 20,
    marginVertical: 40,
    height: 50,
    backgroundColor : '#e5e5e5',
    borderRadius :10
  },
  image: {
    marginTop: 50,
    marginLeft: 30,
    height: 30,
    width: 30,
    position: "absolute",
    alignItems: "center",
  },
});

export default SearchBar;
