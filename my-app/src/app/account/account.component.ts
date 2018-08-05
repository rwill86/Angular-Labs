import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

     constructor(private router:Router, private form:FormsModule){ 
     }

     ngOnInit(){
     }
  
     logout(event){
         event.preventDefault();
	     console.log("clearing session");
	     sessionStorage.clear();
		 localStorage.clear();
		 this.router.navigateByUrl('/login');
     }
}
