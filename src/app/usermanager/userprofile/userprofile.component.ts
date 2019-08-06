import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  Fname:string='';
   Lname:string='';
  Displayname:string='';
  Gender:string='';
   DOB:string='' ;
   Address:string='';
   City:string='';
   State:string='';
   Email:string='';
  arr:User[]=[
    new User('amar','akbar','amarakbar','male','01/03/1997','hubli','hubli','karnataka','amar@g.com')

  ];
  constructor() { }

  ngOnInit() {
  }

}
