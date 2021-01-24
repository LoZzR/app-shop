import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage = null;
  errorCode = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.errorCode = +this.route.snapshot.params['errorCode'];
    switch(this.errorCode){
      case 404: {
        this.errorMessage = "Page Not Found !";
        break;
      }
      case 401: {
        this.errorMessage = "You are not Authorized !";
        break;
      }
      case 403: {
        this.errorMessage = "You are trying to consult a Forbidden page !";
        break;
      }
      case 500: {
        this.errorMessage = "Internal server error. Please contact your administration !";
        break;
      }
    }

  }

}
