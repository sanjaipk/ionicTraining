import { Component, OnInit } from '@angular/core';
import { PersonServiceService } from 'src/app/core/person-service.service';

@Component({
  selector: 'app-personinput',
  templateUrl: './personinput.component.html',
  styleUrls: ['./personinput.component.scss'],
})
export class PersoninputComponent implements OnInit {
  newPerson:string ="";
  constructor(private prsService:PersonServiceService) { }

  ngOnInit() {

  }

  addNewPerson(){
    this.prsService.addPerson(this.newPerson);
  }

  removePerson(){
    this.prsService.removePerson(this.newPerson.trim());
  }

}
