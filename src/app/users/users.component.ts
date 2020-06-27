import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  user: any;
  name;

  selectedUser: any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.userService.getUsers().subscribe((response) => {
      console.log(response);
      this.user = response;
    });
  }

  postUser(input: HTMLInputElement) {
    console.log(input.value);
    const uservalue: any = {name: input.value};
    const user = JSON.stringify(uservalue);
    this.userService.postUsers(user).subscribe((response) => {
      console.log(response);
      uservalue.id = response.id;

      this.user.splice(0, 0, uservalue);

    });
  }

  updateUser(user) {
    this.userService.putUsers(user).subscribe((response) => {
      console.log(response);
    })
  }

  deleteUser(user) {
    this.userService.deleteUsers(user.id).subscribe((response) => {
     const index =  this.user.indexOf(user);
     this.user.splice(index, 1);
    });
  }

  onSelect(user) {
    console.log(user);
    this.selectedUser = user;
  }
}
