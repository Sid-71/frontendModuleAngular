import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
constructor(private builder:FormBuilder,private service : AuthService,private route : Router){}
userForm  = this.builder.group({
  name : this.builder.control(''),
  id  : this.builder.control(''),
  password : this.builder.control(''),
})

registration(){
  if(this.userForm.valid){
    console.log("value in formf is ",this.userForm.value);
    this.service.proceedReg(this.userForm.value).subscribe(res=>{
      
      alert("success");
      this.route.navigate(['/']);
    })
  }
  else {
    alert('not a sucess');
  }
}


}
