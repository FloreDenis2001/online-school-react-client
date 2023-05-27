import React from 'react'
import Book from '../models/Book';

export function getStars(book:Book){
    let numberOfStars=book.stars;
    let allStars="";
    for(let i=0;i<numberOfStars;i++){
     allStars.concat("&#11088;");
    }
   return allStars;
}

