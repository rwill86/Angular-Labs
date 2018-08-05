import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//class user{
	 //userNa:string;
	 //age:number;
	 //birthday:string;
	 //userID:number;
	 //constructor(userNa:string, age:number, birthday:string){
		 //this.userNa = userNa;
	 //}
//}
export class AppComponent{
     title = 'my-app';
     ngOnInit(){
		 console.log("testing if dome is ready");
		 if(typeof(Storage) !== "undefined"){
			 console.log('storage ready');
		 } else{
			 //Sorry no web storage support..
		 }
	 }
}
