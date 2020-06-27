import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
  // styles: [`
  //   h1{
  //     color: orange;
  //   }
  // `]
})
export class HomeComponent implements OnInit {
  addNewUser = false;
  title = 'Shopping App';
  talk: string = 'Devtalk';
  id: number = 10;
  userCreationStatus = 'No User Created';
  userName = 'Test';

  constructor() {
     setTimeout(() => {
       this.addNewUser = true;
     }, 5000);
   }

  ngOnInit(): void {
  }

  getStatus() {
    return this.talk;
  }

  getUserStatus() {
    this.addNewUser = true;
    this.userCreationStatus = 'User creation status successful' + this.userName;
  }

  onUpdatingUserName(event: any) {
    console.log(event);
  }
}
