import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private service : AuthService , private builder : FormBuilder,private route : Router){
  sessionStorage.clear();
}
userForm = this.builder.group({
  id : this.builder.control('#'),
  password : this.builder.control('')
})


// interface se karna hai thike 
login() {
  this.service.getUserByid(this.userForm.value).subscribe({
    next: (res : any) => {
       alert('sucess')
         console.log("res",res);
        
       localStorage.setItem('email',res.id)
         console.log("email is ",localStorage.getItem('email'));
      
       this.route.navigate(['login']);
    },
    error: console.log,
  });
}

}
