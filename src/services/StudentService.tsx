import HttpResponse from "../models/HttpResponse";
import React from "react";
import Student from "../models/Student"
import LoginResponse from "../dtos/LoginResponse";
import LoginRequest from "../dtos/LoginRequest";
class StudentService {


    api<U, T>(path: string, method: string, body: U, token?: string): Promise<HttpResponse<T>>{
        const url = "http://localhost:8080/api/v1" + path;
        const headers= new Headers();
        headers.append(" Content-Type","application/json;charset=utf-8");
        if(token){
            headers.append("Authentification",`Bearer${token}`)
        }

        const options: RequestInit = {
            method,
            headers: headers,
            body: body == null ? null : JSON.stringify(body),
          };
        return fetch(url, options);
    }

    logInn= async(loginRequest:LoginRequest): Promise<LoginResponse> => {
        const response=await this.api<LoginRequest,LoginResponse>("/login","POST",loginRequest);
        return response.json();
    }


}

export default StudentService;