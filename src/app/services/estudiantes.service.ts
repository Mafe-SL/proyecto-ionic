import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  url="http://localhost:5000/api/student";

  constructor(private http:HttpClient) { }

  getStudent():Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }

  addStudent(student:any):Observable<any>{
    return this.http.post<any>(this.url,student)
  }
}
