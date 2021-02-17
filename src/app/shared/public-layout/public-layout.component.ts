import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.scss']
})
export class PublicLayoutComponent implements OnInit {

  name;
  name_search;
  user_name='valeria'

  constructor(
    private _router:Router,
    private _api: ApiService
  ) { }

  ngOnInit(): void {
    //We assign to the class variable the name that we save in localStorage to show who is logged in
    this.name = localStorage.getItem("name")
  }

  //method to search users introducing his name to an input to show all the users with that name
  Search(form: NgForm){
    //we assign to name_search class varible the value than the user introduced
    this.name_search = form.value.name_search;
    //Change all letter in lower case
    this.name_search = this.name_search.toLowerCase();
    //conditional to validate if the name introduced have more than four letters and
    //if the name is different to TaxiaLife
    if(this.name_search.length >= 4 && this.name_search != 'taxialife'){
      console.log(this.name_search);
      //If sent the name_search to show it in users view
      this._router.navigate(['/home/users', this.name_search])
    }
    //If the the validation return false it show a error message
    else{
      Swal.fire('Error',"The user lenght is less than 4 or the user is TaxiaLife",'error');
    }

  }

}
