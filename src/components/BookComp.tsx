import React from 'react'
import Book from '../models/Book'
import {getStars} from '../utile/Utile'
import { Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface BookCompProps{
    book:Book,
}


export const BookComp:React.FC<BookCompProps>=({book})=>{

    return (
        <div className="book id-${book.id} " key={book.id}>
        <Image src="/img/library2.jpeg" alt="" fluid />
        <p className="describe">{book.title}</p>
        <p className="price">{book.price} RON</p>
        <p className="stars">{getStars(book)}</p>
        <i className="fa-light fa-gear setting-icon"></i>
        </div>
    )
}

export default Book