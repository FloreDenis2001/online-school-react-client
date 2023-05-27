import React from 'react'
import Book from '../models/Book'
import {getStars} from '../utile/Utile'

interface BookProps{
    book:Book,
}


export const Book:React.FC<BookProps>=({book})=>{

    return (
        <div className="book id-${book.id}">
        <img src="../mockup-react/img/library2.jpeg" alt="" />
        <p className="describe">{book.title}</p>
        <p className="price">{book.price}</p>
        <p className="stars">getStars(book)</p>
        </div>
    )
}

export default Book