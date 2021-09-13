import { Component, OnInit } from '@angular/core';
import { PersonServiceService } from 'src/app/core/person-service.service';

@Component({
  selector: 'app-personlist2',
  templateUrl: './personlist.component.html',
  styleUrls: ['./personlist.component.scss'],
})
export class PersonlistComponent2 implements OnInit {
  personList: string[] = ['p1','p2','p3'];
  constructor(private prsService:PersonServiceService) { }

  ngOnInit() {
    this.personList = this.prsService.personList;
  }

}

