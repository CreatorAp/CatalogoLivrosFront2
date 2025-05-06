import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Status } from 'src/app/models/status';
import { Usuario } from 'src/app/models/usuario';

import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginUsuarioComponent implements OnInit {

  frm!:FormGroup;
  status!:Status;
  
  usuario!:Usuario;
  get f(){
    return this.frm.controls; 
  }

  onPost(){

    this.usuarioService.login(this.frm.value).subscribe({
      next:(res)=>{
        
        console.log(res); 
        if(res == null){
          this.status = {
            statusCode: 0,
            message: 'Login e senha incorretos'
          }
          
        }
        else{
          this._router.navigateByUrl('/products');
        }
      },
      error:(err)=>{
        console.log(err); 
      }
    })
  }


  constructor(private fb:FormBuilder,private usuarioService:UsuarioService,route:ActivatedRoute, private _router: Router ) { 
  
    const id= route.snapshot.params['id'];
    if(id){
      usuarioService.getById(id).subscribe(
        {
          next:(res)=>{
            this.frm.patchValue(res);      
          },
          error:(err)=>{
            console.log(err); 
          }
        }
      );
  }
}

  ngOnInit(): void {
    this.frm= this.fb.group({
      'id':[0],

      'nome': ['',Validators.required],
      'dataNascimento': ['',Validators.required],
      'email': ['',Validators.required],
      'senha': ['',Validators.required],

    })
    // this.getCategories();
  }

 

}
