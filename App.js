import React, { useState, useEffect } from "react";
import { View , StyleSheet, ScrollView} from "react-native";
import SearchBar from "./src/component/SearchBar";
import Display from "./src/component/display";
import * as BookApi from "./src/api/BooksAPI";
import Shelf from './src/component/shelf'
export default function App() {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);
  const [all, setAll] = useState([]);
  
  const SearchApi = (SearchItem) => {
    BookApi.search(SearchItem).then((book) => {
      setResult(book);
    });
    setResult([])
  }
  const All = () =>{
    BookApi.getAll().then((book) => {
      let books = book
      setAll(books)
    })
  }
  
 
  useEffect(() => {
   
    All()
  }, []);
  console.log(all)

  
  
  return (
    <><ScrollView>
      <SearchBar
        SearchItem={term}
        change={(newTerm) => setTerm(newTerm)}
        endWrite={() => {
          SearchApi(term);
        }}
      />
      
      {result.length === 0 ? <Shelf allBook  = {all}  /> : <Display data = {result} /> }
      
       
      </ScrollView>  
      
    </>
  );
}
 
const styles = StyleSheet.create({
  main: {
    backgroundColor :"#f7f7f7"

},
})