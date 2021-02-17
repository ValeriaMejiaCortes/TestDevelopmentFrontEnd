import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  //This variable has the user which we want to read all details
  user;

  constructor(
    private _ac: ActivatedRoute,
    private _api: ApiService
  ) { }

  ngOnInit(): void {

    //Request with which we obtain the user to show his details
    this._ac.paramMap
    .pipe(
      //request
      switchMap((params: ParamMap) => this._api.getRequest('users/'+params.get('name')))
    )
    .subscribe((user) => {
      this.user = user
    })

  }

}
