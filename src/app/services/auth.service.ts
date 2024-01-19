import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  url = 'http://localhost:3000/users'
  proceedReg(data  : any){
    return this.http.post(this.url ,data);
  }
  getUserByid(data : any)
  {
    let id = data.id
    return this.http.get(this.url +'/'+id);
  }
  addTodo(data : any)
  {
    console.log("data",data);
    return this.http.post('http://localhost:3000/todo',data);
  }
  getList(){
    return this.http.get('http://localhost:3000/todo'); 
  }
  deleteTodo(id : any)
  {
    console.log("id to be deleted",id);
    return this.http.delete('http://localhost:3000/todo/'+id);
  }
}
