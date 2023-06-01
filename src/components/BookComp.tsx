import React from 'react'
import Book from '../models/Book'
import {getStars} from '../utile/Utile'

interface BookCompProps{
    book:Book,
}


export const BookComp:React.FC<BookCompProps>=({book})=>{

    return (
        <div className="book id-${book.id}">
        <img src="../mockup-react/img/library2.jpeg" alt="" />
        <p className="describe">{book.title}</p>
        <p className="price">{book.price}</p>
        <p className="stars">{book.stars}</p>
        </div>
    )
}

export default Book