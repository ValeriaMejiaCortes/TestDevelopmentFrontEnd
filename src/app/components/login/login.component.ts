import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //class variables
  name;
  person_name;
  items_length;

  constructor(
    private router:Router,
    private _api: ApiService
  ) { }

  ngOnInit(): void {
  }

  //method that take the form values in this case the name that the user introduce
  //to search if it exist and have a sucessfull login or show and error
  login(form: NgForm){
    //assign the name that the user introduced, to the class variable name
    this.name = form.value.name;

    //Call the apiService method to save the user logged in localStorage and can use it in all sesion
    this._api.getRequest('users/'+this.name).subscribe(response => {
      if(response != null){
        localStorage.setItem("name",this.name)
        this.router.navigate(['home']);
      }
      }
      //when the git user doesn't exist show this modal error
      ,error=>{
        Swal.fire('Error',"The user doesn't exist",'error');
      }
    )

  }

}
