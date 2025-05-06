import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';
import { Status } from '../models/status';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl=environment.baseUrl+'/usuario';
  constructor(private http:HttpClient) {

   }

   addUpdate(usuario:Usuario){
    // return this.http.post<Status>(this.baseUrl+'/addupdate',product);
    return this.http.post<Status>('https://localhost:7090/api/usuario', usuario);
   }

   getById(id:number){
    return this.http.get<Usuario>(this.baseUrl+'/getbyid/'+id);
   }

   getAll(term:string=""){
    // return this.http.get<Product[]>(this.baseUrl+`/getall?term=${term}`);
    return this.http.get<Usuario[]>('https://localhost:7090/api/usuario');
   }

   delete(id:number){
    return this.http.delete<Status>(this.baseUrl+'/delete/'+id);
   }

   login(usuario:Usuario){    
    return this.http.post<Status>('https://localhost:7090/api/usuario/login', usuario);
   }
}
