import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-person-inpur',
  templateUrl: './person-inpur.component.html',
  styleUrls: ['./person-inpur.component.scss'],
})
export class PersonInpurComponent implements OnInit {
  @Output() personCreate = new EventEmitter<string>();
  personName:string ='';
  constructor() { }



  ngOnInit() {}

  addPersonToList(personVal:string){
    alert(personVal);
  }

  addPersonToList2(){
    this.personCreate.emit(this.personName);
    this.personName='';
  }



}
