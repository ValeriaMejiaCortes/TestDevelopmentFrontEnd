import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'
import { PublicLayoutComponent } from '../../shared/public-layout/public-layout.component'
import { switchMap } from 'rxjs/internal/operators/switchMap';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  //the respons of the request with all users is in this variable
  users;

  constructor(
    private _apiService: ApiService,
    private _ac: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.fetchProducts()
  }

  //method that navigate by routing and sent the parameter(user's name) to the details component
  getProduct(user){
    const name = user.login;
    this._router.navigate(['/home/user', name])
  }

  //method that obtain all users and assign its to the user variable and through query params obtain only
  //the first 10 users in one page
  fetchProducts(){
    this._ac.paramMap
    .pipe(
      //call apiService getrequest and sent the url
      switchMap((params: ParamMap) => this._apiService.getRequest('search/users?q='+params.get('name')+'&page=1&per_page=10'))
    )
    .subscribe((response) => {
      //assign the all users to the class variable users
      this.users = response.items;
    })
  }

}
