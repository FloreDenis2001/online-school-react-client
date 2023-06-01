import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { ContextLogin } from '../context/LoginProvider';
import LoginContextType from '../models/LoginContextType';
import BookService from '../services/BookService';
import { BookComp } from './BookComp';
import Book from '../models/Book';


const Home: React.FC = () => {

  let { studentLogin, setStudent } = useContext(ContextLogin) as LoginContextType;
  let [books, setBooks] = useState(Array<Book>);
  let bookService = new BookService();

  useEffect(() => {
    allBooks();
  }, []);

  let allBooks = async (): Promise<void> => {
    try{
    let booksApi = await bookService.allBooks();
    console.log(booksApi);
    setBooks(booksApi);}catch(err){
      console.log((err as Error).message);
    }
  }

  return (
    <>

      <Header />

      <main>
        <div className="all-learnings">
          {
            books.map(book=>{
              return <BookComp book={book}/>
            })
          }
        </div>

        <button className='btn' onClick={allBooks}>Refresh</button>
      </main>

      <Footer />

    </>
  )
}

export default Home