import React , { useState , useEffect } from 'react';
import MoviesLayout from './MoviesLayout';
import SearchBlock from './SearchBlock';
import axios from 'axios'

function FetchComponent() {

    const [movies , setMovies] = useState([]);
    const [seach , setSearch] = useState('king');

    useEffect(() => {
        
       axios.get(`http://www.omdbapi.com/?s=${seach}&apikey=880cf575`)
          .then (res =>  {
                  setMovies(res.data.Search);
           })
    } , [seach]);

   const getSearch = (value) => {
         setSearch(value);
   }

    return (
        <div>
            <SearchBlock 
              getSearch = { getSearch }
              value = { seach }
            />
            <div className="grid-movie">
            <MoviesLayout 
               movie = { movies }
            />
            </div>
        </div>
    )
}

export default FetchComponent
