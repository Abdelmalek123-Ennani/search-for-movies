import React , { useState } from 'react';
import Spinner from "./Spinner";
import ErrorPage from "./ErrorPage";

function MoviesLayout({ movie }) {
    
    console.log(movie)

    // make sure that the movie is exist in the api or not
    if ( movie !== undefined ) {
        return movie.length === 0 ? (<Spinner />) : movie.map((el) => {
            return (
                 <div className="movie" key={ el.imdbID }>
                    <div className="front">
                      <img src={ el.Poster } />
                    </div>
                    <div className="back">
                        <h4>{ el.Title }</h4>
                         <ul>
                             <li><span>Type</span>  { el.Type }</li>
                             <li><span>Year</span>  { el.Year }</li>
                             <li><a className="ibdm_link" href={ `https://www.imdb.com/title/${el.imdbID}/` }>Visit IMDB</a></li>
                         </ul>
                    </div>
                </div>
            )
        })
    }else {
        return <ErrorPage />
    }
}

export default MoviesLayout
