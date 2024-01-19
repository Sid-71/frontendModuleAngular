import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  list :any[]=[]
  constructor( private serviec : AuthService){

  }
  ngOnInit(): void {
     const data = this.serviec.getList().subscribe(
      (res :any)=>{
      console.log("res",res);
       this.list = res;
     });


  }
 
  addTodo(text : any)
  {
    console.log("dat",text);
   let data = {
    task : text,
    email : 'sidharth@gmail.com'
   }
   this.serviec.addTodo(data).subscribe(res=>{
    this.list.push(data);
   })
  }
  deleteItem(id : any)
  {
    this.serviec.deleteTodo(id).subscribe(res=>{
      
    });
  }
}
