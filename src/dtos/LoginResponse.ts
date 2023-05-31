import HttpResponse from "../models/HttpResponse";
import StudentLogin from "./StudentLogin";

export default interface LoginResponse extends HttpResponse<StudentLogin> {
   id:number,
   email:string,
   token:string,
   first_name:string,
   second_name:string
}