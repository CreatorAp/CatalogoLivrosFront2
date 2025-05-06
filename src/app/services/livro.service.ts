import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Livro } from '../models/livro';
import { Status } from '../models/status';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  private baseUrl=environment.baseUrl+'/product';
  constructor(private http:HttpClient) {

   }

   addUpdate(livro:Livro){
    // return this.http.post<Status>(this.baseUrl+'/addupdate',product);
    return this.http.post<Status>('https://localhost:7090/api/livro', livro);
   }

   getById(id:number){
    return this.http.get<Livro>(this.baseUrl+'/getbyid/'+id);
   }

   getAll(term:string=""){
   
    return this.http.get<Livro[]>('https://localhost:7090/api/livro');
   }

   delete(id:number){
    return this.http.delete<Status>(this.baseUrl+'/delete/'+id);
   }
}
