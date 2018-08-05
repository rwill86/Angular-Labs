import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
     username:string = '';
     password:string = '';
     constructor(private router:Router, private form:FormsModule){ 
	 }

     ngOnInit(){
     }
	 

     loginUser(event){
	     event.preventDefault();
	     if(this.username == "someone@hotmail.com" && this.password == "pass"){			 
		     localStorage.setItem("loggedIn", "1");
		     document.cookie = "loggedIn=1; expire=Wed, 12 Apr 2019 12:00:00 UTC";
		     sessionStorage.setItem("userID", "1");
	         sessionStorage.setItem("username", "Smith");
	         sessionStorage.setItem("birthday", "11/08/1998");
		     sessionStorage.setItem("age", "20");    
		     this.router.navigateByUrl('/account');
	     } else{
		     alert("Username and password were incorrect." + "\nUsername:" + this.username + "\nPassword:" + this.password);
		 }
     }
}
