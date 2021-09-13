import { Component, OnInit } from '@angular/core';
import { PersonServiceService } from 'src/app/core/person-service.service';

@Component({
  selector: 'app-pinp',
  templateUrl: './pinp.component.html',
  styleUrls: ['./pinp.component.scss'],
})
export class PinpComponent implements OnInit {
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
