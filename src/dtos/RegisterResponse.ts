import HttpResponse from "../models/HttpResponse";
import Student from "../models/Student";

export default interface RegisterResponse extends HttpResponse<Student> {
    id:number,
    age:number,
    email:string,
    first_name:string,
    second_name:string,
    password:string
 }