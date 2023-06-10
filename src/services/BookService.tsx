import { useContext } from "react";
import { ContextLogin } from "../context/LoginProvider";
import Book from "../models/Book";
import HttpResponse from "../models/HttpResponse";
import LoginContextType from "../models/LoginContextType";

class BookService {



    api<U, T>(path: string, method: string, body: U, token?: string): Promise<HttpResponse<T>> {
        const url = "http://localhost:8080/api/v1/books" + path;
        const options: RequestInit = {
            method,
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                "Authorization": `Bearer ${token}`,
              },
            body: body == null ? null : JSON.stringify(body),
        };

        console.log(options);
        return fetch(url, options);
    }


    allBooks = async (token : string): Promise<Book[]> => {
        let books = await this.api<null, Book[]>("/all","GET",null,token);
        console.log(books);
        if (books.status === 200) {
            let getBooks = await books.json();
            return getBooks;
        } else {
            throw new Error("Nu s-au gasit carti !");
        }

        
    }





}

export default BookService;