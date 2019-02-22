import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data: any = {};

  constructor(private authService: AuthenticationService) { }

  ngOnInit() { }

  onLogin() {
    console.log(this.data);
    // this.authService.login(this.data)
    //   .subscribe(
    //     data => console.log(data),
    //     error => console.log(error)
    //   );
  }

}
