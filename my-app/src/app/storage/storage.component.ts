import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {
     constructor(){ 
	 }
     ngOnInit(){
		 var message = document.getElementById('message');
	     if(typeof(Storage) !== 'undefined'){
		     var userID = sessionStorage.getItem('userID');
		     var username = sessionStorage.getItem('username');
		     var birthday = sessionStorage.getItem('birthday');
			 var age = sessionStorage.getItem('age');
			 var message = document.getElementById('message');
			 if(userID != null){		         
                 message.innerHTML = "UserID: " + userID + "\nBirthday: " + birthday +  "\nUserName: " +  username + "\nage: " + age;
		     } else{
				 message.innerHTML = 'Please login.';
			 }
		 } else{
             message.innerHTML = 'error with session';
		 }
     }
}
