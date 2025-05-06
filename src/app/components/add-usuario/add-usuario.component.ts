import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Status } from 'src/app/models/status';

import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  frm!:FormGroup;
  status!:Status;

  get f(){
    return this.frm.controls; //will be used in validation
  }

  onPost(){
    this.status={statusCode:0,message:'..'};
    this.usuarioService.addUpdate(this.frm.value).subscribe({
      next:(res)=>{
        this.status=res;
        if(this.status.statusCode==1){
          this.frm.reset();
        }
      },
      error:(err)=>{
        console.log(err); 
      }
    })
  }


  constructor(private fb:FormBuilder,private usuarioService:UsuarioService,route:ActivatedRoute ) { 
  
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
