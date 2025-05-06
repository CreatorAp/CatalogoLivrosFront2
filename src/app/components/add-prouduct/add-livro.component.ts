import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Status } from 'src/app/models/status';

import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-add-prouduct',
  templateUrl: './add-livro.component.html',
  styleUrls: ['./add-livro.component.css']
})
export class AddProuductComponent implements OnInit {

  frm!:FormGroup;
  status!:Status;
  
  get f(){
    return this.frm.controls; 
  }

  onPost(){
    this.status={statusCode:0,message:'..'};
    this.productService.addUpdate(this.frm.value).subscribe({
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


  constructor(private fb:FormBuilder,private productService:LivroService,route:ActivatedRoute ) { 
  
    const id= route.snapshot.params['id'];
    if(id){
      productService.getById(id).subscribe(
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
      'titulo': ['',Validators.required],
      'ibsn': [1,Validators.required],
      'autor': ['',Validators.required],
      'editora': ['',Validators.required],
      'sinopse': ['',Validators.required],
      'foto': ['',Validators.required],
      'genero': ['',Validators.required],

    })
    
  }

 

}
