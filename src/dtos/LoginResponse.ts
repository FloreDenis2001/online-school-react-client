import HttpResponse from "../models/HttpResponse";
import StudentDTO from "./StudentDTO";

export default interface LoginResponse extends HttpResponse<StudentDTO> {
   id:number,
   email:string,
   token:string
}