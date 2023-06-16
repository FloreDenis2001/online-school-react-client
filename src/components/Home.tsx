import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { ContextLogin } from '../context/LoginProvider';
import LoginContextType from '../models/LoginContextType';
import BookService from '../services/BookService';
import { BookComp } from './BookComp';
import Book from '../models/Book';
import CourseService from '../services/CourseService';
import Course from '../models/Course';
import CourseComp from './CourseComp';
import LoginResponse from '../dtos/LoginResponse';


const Home: React.FC = () => {

  let { studentLogin, setStudent } = useContext(ContextLogin) as LoginContextType;
  let [books, setBooks] = useState(Array<Book>);
  let bookService = new BookService();
  // let [courses, setCourses] = useState(Array<Course>);
  let [mycourses, setMyCourses] = useState(Array<Course>);
  let courseService = new CourseService();
  


  useEffect(() => {
    allBooks();
    allMyCourses();
  }, []);

  let allBooks = async (): Promise<void> => {
    try {
      let booksApi = await bookService.allBooks(studentLogin.token);
      setBooks(booksApi);
    } catch (err) {
      console.log((err as Error).message);
    }
  }

  // let allCourses = async (): Promise<void> => {
  //   try {
  //     let coursesApi = await courseService.allCourses(studentLogin.token);
  //     console.log(coursesApi);
  //     setCourses(coursesApi);
  //   } catch (err) {
  //     console.log((err as Error).message);
  //   }
  // }

  let allMyCourses = async (): Promise<void> => {
    try {
      let coursesApi = await courseService.allMyCourses(studentLogin.token);
      setMyCourses(coursesApi);
    } catch (err) {
      console.log((err as Error).message);
    }
  }


  return (
    <>

      <Header />

      <main>
        <div className="all-learnings">
          {
            books.map(book => {
              return <BookComp book={book} />
            })
          }

          { 
            mycourses.map(mycourse => {
              return <CourseComp course={mycourse} />
            })
          }
        </div>

      </main>

      <Footer />

    </>
  )
}

export default Home