import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Livro } from 'src/app/models/livro';

import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-products',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class ProductsComponent implements OnInit {
  products!:Livro[];

  private getProducts(term=""){
    this.productService.getAll(term).subscribe({
      next:(res)=>{
        this.products=res;
        console.log(res);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
 
  search(term:string){
    this.getProducts(term);
  }

  edit(id:number):void{
    this.router.navigate([`/update-product/${id}`]);
  }

  delete(id:number,index:number):void{
    if(window.confirm("Are your sure to delete??")){
    this.productService.delete(id).subscribe({
      next:(res)=>{
        if(res.statusCode==1){
          this.products.splice(index,1);
        }
        else{
          console.log(res.message);
        }
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  }
  constructor(private productService:LivroService,private router:Router) { }

  ngOnInit(): void {
    this.getProducts();
  }
  

}
