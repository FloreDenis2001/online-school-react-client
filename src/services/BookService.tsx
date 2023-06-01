import { useContext } from "react";
import { ContextLogin } from "../context/LoginProvider";
import Book from "../models/Book";
import HttpResponse from "../models/HttpResponse";
import LoginContextType from "../models/LoginContextType";

class BookService{



    api<U, T>(path: string, method: string, body: U, token?: string): Promise<HttpResponse<T>> {
        const url = "http://localhost:8080/api/v1/books" + path;
        const headers = new Headers();
        headers.append("Content-Type", "application/json;charset=utf-8");
        if (token) {
            headers.append("Authentification", `Bearer ${token}`);
        }

        const options: RequestInit = {
            method,
            headers: headers,
            body: body == null ? null : JSON.stringify(body),
            mode:"no-cors"
        };
        return fetch(url, options);
    }


    allBooks=async():Promise<Book[]> =>{

        let token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJhdWQiOiJMaWJyYXJ5IE1hbmFnZXIgIiwic3ViIjoiZmxvcmVkZW5pc0B5YWhvby5jb20iLCJpc3MiOiJNeUNvZGUiLCJleHAiOjE2ODYwNjA1NzAsImlhdCI6MTY4NTYyODU3MCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9TVFVERU5UIiwiYm9vazpyZWFkIiwiY291cnNlOnJlYWQiLCJib29rOndyaXRlIl19.MSOwOEaVdtsgznJ6Ko6bOJB-o33ptO3qlqFr5OFvohlnflSdLbaU3xPmwUBUtmn3gL3dmAiNqim2xgEv0gy6Cw"
         let books= await this.api<null,Book[]>("/all","GET",null,token);


       if(books.status===200){
        let getBooks=await books.json();
        return getBooks;
       }else{
        throw new Error("Nu s-au gasit carti !");
       }
    }





}

export default BookService;