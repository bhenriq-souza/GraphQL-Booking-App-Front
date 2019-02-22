import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-authentication",
  templateUrl: "./authentication.component.html",
  styleUrls: ["./authentication.component.scss"]
})
export class AuthenticationComponent implements OnInit {
  mode: string = '';

  constructor() { }

  ngOnInit() {
    this.mode = 'login';
  }

  onSwitchMode(mode: string): void {
    this.mode = mode;
  }
}
