import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
     email: string = '';
     password: string = '';
     constructor(private router: Router, private form: FormsModule) { }

     ngOnInit(){
     }
  
     loginuser(event){
	     event.preventDefault();
	     console.log(this.email);
	     if(this.email == "someone@hotmail.com" && this.password == "pass"){
		     this.router.navigateByUrl('/account');
	     } else{
		     alert("Email and password were incorrect." + "\nEmail:" + this.email + "\nPassword:" + this.password)
		 }
     }
}
