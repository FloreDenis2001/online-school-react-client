import HttpResponse from '../models/HttpResponse';
import Book from '../models/Book';

class ServiceBook{



    api<U, T>(path: string, method: string, body: U, token: string): Promise<HttpResponse<T>> {
        const url = "http://localhost:8080/api/v1/" + path;
        const options: RequestInit = {
          method,
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authentification: `Bearer${token}`,
            method: "no-cors"
          },
          body: body == null ? null : JSON.stringify(body),
        };
    
        return fetch(url, options);
    
    }


   getAllBooks = async () : Promise<Book[]>=>{
    let data = await this.api<null, Book[]>("books/all", "GET", null, "");
    if (data.status === 200) {
      let books = await data.json();
      return books;
    } else {
      return Promise.reject([]);
    }

   }


}

export default ServiceBook;